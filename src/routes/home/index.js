import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		{/*FOLD*/}
		<section>
			<div className="fold">
				<div className="container">
					<h1>Click your streaming service below to listen to <b>Silent Methods</b></h1>
				</div>
			</div>
		</section>
		{/*LINKS*/}
		<section>
			<div className="container">
				<div className="link-holder">
					<a className="itunes link" href="https://music.apple.com/us/album/silent-methods-single/1480581567">
						Apple Music
					</a>
					<a className="spotify link" href="https://open.spotify.com/album/2rZxoCObBFfJ42Evzlznxs?si=DLTuo6woTKCVyvp4K5Yl3w">
						Spotify
					</a>
					<a className="am link" href="https://music.amazon.com/albums/B07Y3MS3DS?ref=dm_sh_3977-c3d4-dmcp-ba74-adb44&musicTerritory=US&marketplaceId=ATVPDKIKX0DER">
						Amazon Music
					</a>
					<a className="gm link" href="https://play.google.com/store/music/album/Fragmiint_Silent_Methods?id=Bxavsydmhk3an6x7duvgigvzp3m">
						Google Music
					</a>
					<a className="deezer link" href="https://www.deezer.com/en/album/111686522">
						Deezer
					</a>
				</div>
			</div>
		</section>
	</div>
);

export default Home;
