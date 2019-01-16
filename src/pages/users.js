export function User() {
  document.querySelector(".pages").innerHTML = "users";
  document.querySelector(".content-container").innerHTML = " ";
  const userContainer = document.createElement("div");
  userContainer.className = "userContainer";
  document.querySelector(".content-container").appendChild(userContainer);
  createUser();
  function createUser() {
    const createUserBlock = document.createElement("div");
    createUserBlock.className = "createUser";
    userContainer.appendChild(createUserBlock);
    const userName = document.createElement("input");
    userName.className = 'userName'
    userName.setAttribute("placeholder", "Name Surname")
    userName.setAttribute("type", "input");
    createUserBlock.appendChild(userName);
  }
}
