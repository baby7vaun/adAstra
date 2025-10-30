
// Simple particle background is optional - left out for brevity
document.addEventListener('DOMContentLoaded', ()=>{
  // Sample media IDs - replace with dynamic API fetches when you add keys
  const ytSamples = ['dQw4w9WgXcQ','3JZ_D3ELwOQ']; // sample YouTube video IDs
  const scSamples = ['https://soundcloud.com/forss/flickermood']; // sample SoundCloud URLs (oEmbed supported)
  const twitchSamples = ['https://player.twitch.tv/?channel=monstercat&parent=localhost']; // example embed string (replace parent param on deploy)

  const ytGrid = document.getElementById('youtube-grid');
  const scGrid = document.getElementById('soundcloud-grid');
  const streamsGrid = document.getElementById('streams-grid');

  if(ytGrid){
    ytSamples.forEach(id=>{
      const div = document.createElement('div');
      div.className='media-card';
      div.innerHTML = `<iframe width="100%" height="200" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      ytGrid.appendChild(div);
    });
  }

  if(scGrid){
    scSamples.forEach(url=>{
      const div = document.createElement('div');
      div.className='media-card';
      div.innerHTML = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}"></iframe>`;
      scGrid.appendChild(div);
    });
  }

  if(streamsGrid){
    twitchSamples.forEach(embedUrl=>{
      const div = document.createElement('div');
      div.className='media-card';
      div.innerHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen="true" scrolling="no" height="300" width="100%"></iframe>`;
      streamsGrid.appendChild(div);
    });
  }

  // Invite button placeholder behavior
  const inviteBtn = document.getElementById('invite-astracore');
  if(inviteBtn){
    inviteBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      // replace with your bot oauth invite link
      window.open('https://discord.com/oauth2/authorize?client_id=CLIENT_ID&scope=bot%20applications.commands&permissions=8','_blank');
    });
  }
});
