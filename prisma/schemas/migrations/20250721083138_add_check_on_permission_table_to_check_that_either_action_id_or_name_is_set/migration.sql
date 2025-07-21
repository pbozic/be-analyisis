-- This is an empty migration.
ALTER TABLE "permission"
ADD CONSTRAINT "permission_action_or_name"
CHECK (
  action_id IS NOT NULL OR name IS NOT NULL
);