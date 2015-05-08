#!/usr/bin/env bash
set -e # halt script on error

# If this is the publish branch, push it up to gh-pages
if [ $TRAVIS_PULL_REQUEST = "false" ] && [ $TRAVIS_BRANCH = ${PRODUCTION_BRANCH} ]; then
  echo "Get ready, we're publishing!"
  cd dist
  ncftpput -R -v -u "$FTP_U" -p "$FTP_P" danielfdsilva.com / ./*
else
  echo "Not a publishable branch so we're all done here"
fi
