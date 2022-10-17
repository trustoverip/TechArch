# Contribution Guide

There are many ways to be a contributor, and we're here to help you on your way!
You may:

* Propose ideas in our discussion forums
* Raise an [issue](https://github.com/trustoverip/TechArch/issues) or feature
  request in our issue tracker
* Help another contributor with one of their questions, or a documentation
  review
* Suggest improvements by supplying a [Pull
  Request](https://github.com/trustoverip/TechArch/pulls) or opening a
  [Discussion](https://github.com/trustoverip/TechArch/discussions)
* Evangelize our work together in conferences, podcasts, and social media
  spaces.

This guide is for you.

## Table Of Contents

* [Setup](#setup)
* [Branching And Tagging](#branching-and-tagging)
* [Issues](#issues)
* [Labels](#labels)
  * [Priority Labels](#priority-labels)
  * [Type Labels](#type-labels)
  * [Status Labels](#status-labels)
* [Changes to Document](#changes-to-document)
* [Editing Git Process](#editing-git-process)
* [Review and Merge Process](#review-and-merge-process)

## Contribution

### Setup

First, the Working Group or Task Force ("group") should contact the ToIP
Foundation Program Manager (currently Elisa Trevino) to request setup of a
GitHub repo for the deliverable. The group should also request that Github
Discussions be turned on for the repo so the Discussions feature is available to
the group for Q&A or other discussions that are not necessarily issues (but can
be quickly converted into a formal issue when needed).


### Branching and Tagging:

- The main-branch should always have the latest approved changes
- Custom "feature" branches may be used for special purposes, e.g. for groups to
  work on a larger section of text
- Version tags are used for each release of the document
- Releases should be versioned and if needed, appended with a pre-release tag,
  e.g. "v1", "v3-RC1", "v4-IIW39"
- Versioning should be simple, only major releases numbered, prepended with
  letter v. e.g. v1, v2, v3.
- Please
  [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
  the repository to make changes and submit a PR to request them for review.
- Branch protection rules will exist to not allow a person to directly commit to
  `main`.

### Issues

- Anyone may raise an issue
- Every week editors will go through the new issues, and label them.
- Please provide as much clarity as possible around an issue topic. Ideally, you
are always answering the following:
   * what is the issue?
   * why is it important?
   * what would trigger closure of the ticket?
- Issues that are not commented on for over 90 days, and reviewed to not be
  relevant will be closed by an editor

## Labels

### Priority Labels

Priority labels are used to describe the impact and focus of the issue. Higher
priority means it is more likely to find focus within the group.

| Priority | Label | Usage |
|----------|----------|--------------------------------------------------------------------------------------------|
| priority | critical | Progress on this issue is critical to the group's forward progress. |
| priority | high | It is important for the group to resolve this issue soon. |
| priority | medium | This issue is important to resolve before the next release. |
| priority | low | This issue is "nice to have" for the next release, but could be deferred if time runs out. |

### Type Labels 

Type labels are labels the define the nature of the issue and/or the correction
itself.

| Type | Label | Usage |
|------|------------|----------------------------------------------------------------------------|
| type | editorial | The issue only involves wording and not normative content. |
| type | content | The issue involves normative content; resolution requires group consensus. |
| type | correction | The issue is fixing a recognized problem in the current version. |
| type | formatting | The issue involves fixing formatting. |
| type | figure | The issue involves a figure that it missing or needs to be revised. |
| type | admin | The issue is administrative and NOT about the deliverable. |

### Status Labels 

Status labels are labels that are used to help identify the current state of the
issue, so that we may accurately classify the work to do on it.

| Status | Label | Usage |
|--------|-------------------|-------------------------------------------------------------------------------------------------------------------|
| status | unassigned | The issue is new and has not yet been assigned to anyone. |
| status | in-progress | The issue has been assigned and work is in progress. |
| status | needs-review | A resolution (or concrete step forward) has been proposed and needs review. |
| status | blocked | Progress is currently blocked; the block should be explained in a comment. |
| status | on-hold | Progress is currently on hold; the reason should be explained in a comment. |
| status | deferred | Consensus has been reached that this issue can be deferred to a subsequent version. |
| status | abandoned | Consensus has been reached that this issue can be abandoned. |
| status | PR-needed | Consensus has been reached and this issue is now waiting for a PR to be submitted. |
| status | PR-in-progress | The issue is linked to a PR that is in progress |
| status | PR-completed | The issue is linked to a PR that is complete and waiting for review. |
| status | PR-accepted | The issue is linked to a PR that has been accepted and is waiting for merge. |
| status | PR-merged | The issue is linked to a PR that has been merged; this issue can now be closed. |
| status | status: last-call | The issue has been resolved by some other mechanism documented in the comments and is now in **5 day last call.** |

## Changes to document

- Change proposals can be made by anyone by creating an issue in Git and
  proposing a pull request against the main branch, containing the proposed
  changes.
- Change proposals are made as according to the process below
- Editors may make changes to the main branch without creating an issue, in the
  case where an issue has not been already created. If an issue already exists
  for the change, the editor should follow the standard review process and refer
  the PR in the issue

### Editing Git process
1) Create a
 [clone](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) of
 the repo or
 [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
 the repo 2) Make changes to the document on your own repo 3) Ensure commit
 history sync by rebasing own repo with 'git pull rebase' 4) Create a pull
 request against the ToIP repo main branch 5) Refer to the PR in the relevant
 issue(s). 6) Contributor sets the issue to label "Needs review" to signal
 editors to review the changes

You may also put your PR in
[draft](https://github.blog/2019-02-14-introducing-draft-pull-requests/) to
signal a wip that can be collaborated on with other people.

### Review and Merge Process

- Review of PR's is done by appointed editors. See the
  [GOVERNANCE](GOVERNANCE.md) file for more information.
- Issues labeled with `status: needs-review` should contain a PR code OR the
  change text directly in the issue (for those not Git-savvy)
- When you create an issue or a PR, please try to tag them appropriately,
  including adding a `status: needs-review` label to the issue/PR.
- Every week, the editors will go through the issues and tag them appropriately.
- If the PR is ready to be merged, it is tagged with `accepted` -label
- In normal circumstances, any editor may merge changes tagged with label
  `accepted`
- The editor can try to merge the PR to the main branch.
- If PR is not rebased and commit histories are not in sync, the PR can be
  merged if there are no overlapping changes with the history. In this case it
  is the merging editor's responsibility to ensure that the merging is clean and
  no unwanted changes happen.
- In case of change conflicts, the editor requests the PR creator to rebase
  against current main branch and resubmit the PR.
- After review, an `editor` may change the status to `status: last-call`. This
  would signal a 5 day delay for close.
- If nobody disagrees with the `status: last-call`, the issue is accepted and
  merged back into `main`.
- Sometimes the editor group may agree to a controlled merging process and
  decide that merging happens only by a selected editor (e.g. release owner) or
  during editor meetings. This may happen when a release of the document is
  coming soon and only some specific changes are allowed.
