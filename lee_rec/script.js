function navigate(page) {
  const app = document.getElementById('app');

  if (page === 'home') {
    app.innerHTML = `
      <section class="section">
        <h2>📊 LEE 차트 TOP 10</h2>
        <ol class="music-list">
          <li>NewJeans - Super Shy <button class="play-button" onclick="alert('재생: Super Shy')">▶</button></li>
          <li>LE SSERAFIM - EASY <button class="play-button" onclick="alert('재생: EASY')">▶</button></li>
          <li>Crush - Beautiful <button class="play-button" onclick="alert('재생: Beautiful')">▶</button></li>
          <li>BTS - Dynamite <button class="play-button" onclick="alert('재생: Dynamite')">▶</button></li>
          <li>IU - Blueming <button class="play-button" onclick="alert('재생: Blueming')">▶</button></li>
          <li>Red Velvet - Feel My Rhythm <button class="play-button" onclick="alert('재생: Feel My Rhythm')">▶</button></li>
          <li>TAEYANG - VIBE <button class="play-button" onclick="alert('재생: VIBE')">▶</button></li>
          <li>10cm - 쓰담쓰담 <button class="play-button" onclick="alert('재생: 쓰담쓰담')">▶</button></li>
          <li>ZICO - 아무노래 <button class="play-button" onclick="alert('재생: 아무노래')">▶</button></li>
          <li>BLACKPINK - Shut Down <button class="play-button" onclick="alert('재생: Shut Down')">▶</button></li>
        </ol>
      </section>
    `;
  } else if (page === 'about') {
    app.innerHTML = `
      <section class="section">
        <h2>🙋 자기소개</h2>
        <img src="me.jpg" alt="자기 이미지" class="profile-image">
        <div class="profile-intro">
          <p>안녕하세요. <strong>강원대학교</strong> <strong>컴퓨터공학</strong>을 전공 중인 <strong>이성준</strong>입니다.</p>
          <p>음악을 사랑하고, 친구들에게 추천해주는 걸 좋아해 이 페이지를 만들었습니다.</p>
          <p>분위기별 추천과 빠른 선곡 기능을 통해 함께 즐기는 공간이 되길 바랍니다.</p>
        </div>
      </section>
    `;
  } else if (page === 'playlist') {
    app.innerHTML = `
      <section class="section">
        <h2>⚡ 빠른 선곡</h2>
        <ul class="music-list">
          <li>🎧 아이유 - 라일락 <button class="play-button" onclick="alert('재생: 라일락')">▶</button></li>
          <li>🎧 볼빨간사춘기 - 우주를 줄게 <button class="play-button" onclick="alert('재생: 우주를 줄게')">▶</button></li>
          <li>🎧 악동뮤지션 - 200% <button class="play-button" onclick="alert('재생: 200%')">▶</button></li>
          <li>🎧 브레이브걸스 - 롤린 <button class="play-button" onclick="alert('재생: 롤린')">▶</button></li>
        </ul>
      </section>
      <section class="section">
        <h2>🎼 분위기에 따른 음악 추천</h2>
        <div class="mood-section">
          <div class="mood-box">
            <h3>🌊 시원한 느낌</h3>
            <ul>
              <li>볼빨간사춘기 - 바람사람 <button class="play-button">▶</button></li>
              <li>태연 - 그대라는 시 <button class="play-button">▶</button></li>
            </ul>
          </div>
          <div class="mood-box">
            <h3>🏃 신나는 음악</h3>
            <ul>
              <li>싸이 - DADDY <button class="play-button">▶</button></li>
              <li>IVE - I AM <button class="play-button">▶</button></li>
            </ul>
          </div>
          <div class="mood-box">
            <h3>🚗 드라이브</h3>
            <ul>
              <li>잔나비 - 주저하는 연인들을 위해 <button class="play-button">▶</button></li>
              <li>DEAN - instagram <button class="play-button">▶</button></li>
            </ul>
          </div>
          <div class="mood-box">
            <h3>💪 운동</h3>
            <ul>
              <li>방탄소년단 - FIRE <button class="play-button">▶</button></li>
              <li>Stray Kids - MIROH <button class="play-button">▶</button></li>
            </ul>
          </div>
        </div>
      </section>
    `;
  }
}

window.onload = () => {
  navigate('home');
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
};
