ENV=$1;
if [ -z $ENV ] ; then
  echo 'Usage: Deploy.sh <environment>';
elif [ $ENV == '-h' ] ; then
  echo 'Deploy.sh <env>\n\nDeploy the Adventure Guild website client files to adventureguildgame.com\n<env> - 'dev' for dev.adventureguildgame.com, 'prod' for adventureguildgame.com';
elif [ $ENV == 'dev' ] ; then
  echo 'Deploying to dev...';
  rsync index.html yesandgames@yesandgames.com:~/www/dev.adventureguildgame.com/
  rsync -r fonts/ yesandgames@yesandgames.com:~/www/dev.adventureguildgame.com/fonts/
  rsync -r imgs/ yesandgames@yesandgames.com:~/www/dev.adventureguildgame.com/imgs/
  rsync -r build/ yesandgames@yesandgames.com:~/www/dev.adventureguildgame.com/build
  rsync -r content/ yesandgames@yesandgames.com:~/www/dev.adventureguildgame.com/content
  rsync -r js/ yesandgames@yesandgames.com:~/www/dev.adventureguildgame.com/js
elif [ $ENV == 'prod' ] ; then
  echo 'Deploying to prod...';
  rsync index.html yesandgames@yesandgames.com:~/www/adventureguildgame.com/
  rsync -r fonts/ yesandgames@yesandgames.com:~/www/adventureguildgame.com/fonts/
  rsync -r imgs/ yesandgames@yesandgames.com:~/www/adventureguildgame.com/imgs/
  rsync -r build/ yesandgames@yesandgames.com:~/www/adventureguildgame.com/build
  rsync -r content/ yesandgames@yesandgames.com:~/www/adventureguildgame.com/content
  rsync -r js/ yesandgames@yesandgames.com:~/www/adventureguildgame.com/js
fi

echo 'Done';
