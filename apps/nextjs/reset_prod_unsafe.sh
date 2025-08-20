#!/bin/sh

set -e  # Exit if any command fails

CURRENT="./public_nodejs"

echo "Are you sure you want to drop ALL DB TABLES and redeploy? Type YES to confirm:"
read CONFIRM

if [ "$CONFIRM" != "YES" ]; then
  echo "Aborted."
  exit 1
fi

git pull
pnpm i
pnpm build
echo "truncating database tables"
pnpm tsx drop_all.ts
echo "Pushing to database"
pnpm db:push
echo "Seeding database"
pnpm db:seed

# Restart devil service
echo "Restarting devil service"
devil www restart mateusz-kifner.smallhost.pl

echo "Done!"
