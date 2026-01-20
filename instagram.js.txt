const token = "TON_ACCESS_TOKEN_INSTAGRAM";
const limit = 6;
const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${token}&limit=${limit}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const feed = document.getElementById("insta-feed");

    data.data.forEach(post => {
      if (post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM") {
        const a = document.createElement("a");
        a.href = post.permalink;
        a.target = "_blank";

        const img = document.createElement("img");
        img.src = post.media_url;

        a.appendChild(img);
        feed.appendChild(a);
      }
    });
  })
  .catch(err => console.error("Instagram API error", err));
