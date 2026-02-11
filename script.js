const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

let feeds = document.getElementById("section");

function render() {
  html = "";
  for (i = 0; i < posts.length; i++) {
    html += `<div class="container">
        <div class="posts-section">
          <div class="profile-details">
            <img src="${posts[i].avatar}" alt="" class="user-avatar"/>
            <p>
              <span class="bold">${posts[i].name}</span
              ><span class="location">${posts[i].location}</span>
            </p>
          </div>
          <img src="${posts[i].post}" alt="" class="post-img" />
          <div class="interact-section">
            <img src="images/icon-heart.png" alt="" class="icons" id="like-btn-${i}"/>
            <img src="images/icon-comment.png" alt="" class="icons" />
            <img src="images/icon-dm.png" alt="" class="icons" />
            <p class="like-counts"><span class="bold" id="post-likes-${i}">${posts[i].likes} likes</span></p>
            <p class="comments">
              <span class="bold">${posts[i].username}</span> ${posts[i].comment}
            </p>
          </div>
        </div>
      </div>
  `;
    feeds.innerHTML = html;
  }
  for (let i = 0; i < posts.length; i++) {
    document
      .getElementById(`like-btn-${i}`)
      .addEventListener("dblclick", function () {
        posts[i].likes++;
        document.getElementById(`post-likes-${i}`).textContent =
          posts[i].likes + " likes";
        document.getElementById(`like-btn-${i}`).src =
          "images/icon-heart-liked.png";
      });
  }
}
render();
