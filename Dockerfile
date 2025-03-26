From 22-alpline

WORKDIR /User_Service
COPY package.json .
RUN npm install
COPY . .
CMD npm start
