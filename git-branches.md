#Branching

Create a new branch when:
1. Working on fixing something
2. Experimenting with something wild
3. Doing work that might conflict
4. When working on a module
5. For each user-story / feature
6. you feel like it ...

## how to
# create a branch
git branch branchname

Note! It doesn't actually switch to the new branch!

# switch to a branch
git switch branchname

# figuring out where you are
git branch
or
git status

# making changes to a branch
simply change, add, commit as usual!
(don't need to push, unless you need the backup on GitHub)

# taking changes from a branch into main/master
Switch to main/master
git switch main
Merge the branch
git merge branchname

- if lucky, there are no conflicts 
- but when there are, fix them in the current branch (and yes, that would be main/master)
- when fixed, commit (if necessary) - and push
- then, take a well-deserved break (+dance)
