
@REM npm run docs:build
cd docs/.vuepress/dist
git init
git add .
git commit -m "%date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,2%-%time:~3,2%-%time:~6,2% deploy"
git remote add origin https://github.com/ivwv/ivwv.github.io.git
git checkout -b static
git checkout static
# git branch -M static
git push -f origin static
cd ../../../