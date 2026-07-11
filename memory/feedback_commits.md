---
name: feedback_commits
description: Do not add Co-Authored-By Claude to commit messages
metadata:
  type: feedback
---

Never add "Co-Authored-By: Claude" or any Claude/Anthropic attribution to git commit messages.

**Why:** User does not want their GitHub history to show commits attributed to Claude.

**How to apply:** When creating commits, write the commit message with no Co-Authored-By footer at all.
