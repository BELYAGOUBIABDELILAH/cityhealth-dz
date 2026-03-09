

# Plan: Admin Report Notes System for Providers

## Overview
Create a bidirectional communication system where:
1. Client reports about providers appear in the admin dashboard (already exists via `ReportsModerationPanel`)
2. Admin can send a **report note** to the provider explaining the issue
3. Providers see these notes in their dashboard with a notification badge

---

## Database Changes

**New table: `admin_provider_notes`**
| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| provider_id | text | Target provider |
| report_id | uuid | FK to provider_reports (nullable) |
| admin_id | text | Admin who created the note |
| title | text | Short title (e.g., "Report received") |
| message | text | Full message body |
| severity | text | 'info' | 'warning' | 'critical' |
| is_read | boolean | Default false |
| created_at | timestamp | |

**RLS Policies:**
- Public read (providers read their own notes)
- Admin insert/update

---

## Component Changes

### 1. Admin Side: `ReportsModerationPanel.tsx`
- Add "Send Note" button next to each provider report row
- Open dialog with form: Title, Message, Severity selector
- On submit: insert into `admin_provider_notes` linking the report

### 2. Provider Side: `ProviderDashboard.tsx`
- Add a **"Notifications Admin"** tab in the sidebar
- Display list of notes from admin with:
  - Severity badge (info/warning/critical)
  - Title, message, date
  - Mark as read functionality
- Show red badge counter in sidebar when unread notes exist

### 3. New Component: `AdminNotesSendDialog.tsx`
- Modal form for admin to compose a note
- Fields: Title, Message (textarea), Severity (select)
- Sends to `admin_provider_notes` table

### 4. New Component: `ProviderAdminNotifications.tsx`
- Card displaying list of admin notes for the provider
- Empty state when no notes
- Click to expand and mark as read

---

## Technical Details

**Sidebar badge (ProviderDashboard):**
```typescript
// Query unread admin notes count
const { data: unreadNotes } = useQuery({
  queryKey: ['admin-notes', providerId],
  queryFn: () => supabase.from('admin_provider_notes')
    .select('id', { count: 'exact' })
    .eq('provider_id', providerId)
    .eq('is_read', false)
});
```

**Admin sends note:**
```typescript
await supabase.from('admin_provider_notes').insert({
  provider_id,
  report_id, // optional link to original report
  admin_id: user.uid,
  title,
  message,
  severity: 'warning',
});
```

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `supabase/migrations/...` | Create `admin_provider_notes` table |
| `src/components/admin/AdminNotesSendDialog.tsx` | New - dialog to send note |
| `src/components/admin/ReportsModerationPanel.tsx` | Add "Send Note" button |
| `src/components/provider/ProviderAdminNotifications.tsx` | New - list of admin notes |
| `src/pages/ProviderDashboard.tsx` | Add notifications tab + badge |

---

## Flow Summary

```text
Client → Reports Provider → Admin Dashboard
                                ↓
                    Admin reviews + sends note
                                ↓
             Provider sees note in Dashboard
```

