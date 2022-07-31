@REM 不能输入中文，会乱码
git add .
@REM git commit -m "%date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,2%-%time:~3,2%-%time:~6,2% push"
git commit -m "update SEO,previre swiper，sitemap，feed and PWD"
git checkout main
git push -u origin main
