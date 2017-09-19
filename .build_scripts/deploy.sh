#!/usr/bin/env bash
set -e # halt script on error

echo "Get ready, we're publishing!"
cd dist
ncftpput -R -v -u "$FTP_U" -p "$FTP_P" danielfdsilva.com / ./*
