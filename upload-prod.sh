#!/bin/bash

tar czf - -C ./dist-prod/ . | ssh webserver "(sudo rm -rf /var/www/0xflik.pt/html/*; cd /var/www/0xflik.pt/html; sudo tar xzf -)"
