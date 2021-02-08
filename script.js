fetch(`https://jsonplaceholder.typicode.com/users`)
   .then(value => value.json())
   .then(value => {
      console.log(value);
      return value
   })
   .then(users => {
      // address:
      // city: "Gwenborough"
      // geo:
      // lat: "-37.3159"
      // lng: "81.1496"
      // street: "Kulas Light"
      // suite: "Apt. 556"
      // zipcode: "92998-3874"
      // company:
      // bs: "harness real-time e-markets"
      // catchPhrase: "Multi-layered client-server neural-net"
      // name: "Romaguera-Crona"
      // email: "Sincere@april.biz"
      // id: 1
      // name: "Leanne Graham"
      // phone: "1-770-736-8031 x56442"
      // username: "Bret"
      // website: "hildegard.org"
      let block = document.createElement("div");
      document.body.appendChild(block);

      for (const user of users) {
         let userBlock = document.createElement("div");
         block.appendChild(userBlock);
         userBlock.style.backgroundColor = "yellow"
         userBlock.style.margin = "10px";
         userBlock.style.borderLeft = "3px solid black";
         

         let name = document.createElement("h3");
         name.innerText = user.name;
         userBlock.appendChild(name);

         let phone = document.createElement("div");
         phone.innerText = `Phone : ${user.phone}`;
         userBlock.appendChild(phone);

         let username = document.createElement("div");
         username.innerText = `Username : ${user.username}`;
         userBlock.appendChild(username);

         let city = document.createElement("div");
         city.innerText = `City : ${user.address.city}`;
         userBlock.appendChild(city);

         let anchor = document.createElement("a");
         anchor.innerText = "deteiles";
         anchor.href = `userStor.html?id=${user.id}`;
         userBlock.appendChild(anchor);
      }
   })
