FROM ctfhub/base_misc_socat_nodejs

ENV COMMAND=./app.js

COPY src/app.js /home/ctf/app.js
