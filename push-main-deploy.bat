@REM 不能输入中文，否者会乱码
git add .
git commit -m "%date:~0,4%-%date:~5,2%-%date:~8,2% %time:~0,2%-%time:~3,2%-%time:~6,2% push"
@REM git commit -m "update SEO,previre swiper,sitemap,feed and PWD"
@REM git commit -m "updata "
git checkout main
git push -u origin main
