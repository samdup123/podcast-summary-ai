// import axios from 'axios';
import OpenAI from 'openai';
import { extractPodcastTitleUrl } from './src/extractUrlWithDate';

const myApiTokenFile = Bun.file(process.env.HOME + "/.openai-credentials");

const getOpenAiClient: any = async () => {
  const token = await myApiTokenFile.text();

  const client = new OpenAI({
    apiKey: token
  });

  return client
}

async function fetchHTML(url: string): Promise<string | null> {
  // try {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error(`Network response was not ok: ${response.statusText}`);
  //   }
  //   const html = await response.text();

  //   return html;
  // } catch (error) {
  //   console.error('Error fetching HTML:', error);
  //   return null;
  // }

	return 'howdy \n dowdy \n doody https://wng.org/podcasts/the-world-and-everything-in-it-august-8-2024-1723048334 shmoop';
}

async function main() {
	const url = 'https://wng.org/podcasts/the-world-and-everything-in-it';
	const html = await fetchHTML(url);
	if (!html) {
		console.error('Failed to fetch HTML');
		return;
	}

	// console.log(html);
	console.log(extractPodcastTitleUrl(html, url));
}

main();


// // This function simulates fetching the HTML content of a webpage
// async function fetchHtml(url: string): Promise<string> {
//   // In a real scenario, you'd use a library like 'node-fetch' to make the request
//   const response: string = await new Promise((resolve) => resolve(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
// 	<meta charset="utf-8">
// <meta http-equiv="X-UA-Compatible" content="IE=edge">
// <meta name="viewport" content="width=device-width, initial-scale=1">	<link href="/css/bootstrap.min.css?v=4.0.0" rel="stylesheet">
// <link href="/css/styles.css?v=2.22" rel="stylesheet">
// <script data-search-pseudo-elements src="https://kit.fontawesome.com/604e3a8dae.js" crossorigin="anonymous"></script>

// <!-- Five 9 files
// <script src="https://app.five9.com/consoles/SocialWidget/five9-social-widget.min.js"></script>
// <script src="/js/five9.js" ></script>
// <link href="/css/five9.css" rel="stylesheet"> -->

// <!-- Start GPT Tag -->
// <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js'></script>

// <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.0/howler.core.min.js" integrity="sha512-adYefSF5Yqrk6IfUEa40OrIDc2Mgc2tErcS3DAU+WyZqlr/1Kr/FoKcHSNOP9hNHbOQjOgGxga4Yp/sK5w0ZmQ==" crossorigin="anonymous"></script>

// <style>
// 			@media screen and (max-width: 768px){ .hide-open-border {display:none !important;} }
// 	</style>

// <link href="/css/owl.carousel.min.css" rel="stylesheet">
// <link href="/css/owl.theme.default.min.css" rel="stylesheet">

// 	<style>
// 		.owl-prev {left: 10px !important;font-size: 40px !important;}
// 		.owl-next {right: 10px !important;font-size: 40px !important;}
// 		.owl-prev svg,.owl-next svg {color: white !important;}
// 	</style>

// <meta name="facebook-domain-verification" content="sibn2i850exvjectyyvpgqy3wrhbrw" />

// <div id="component-jqnikd" class="sprig-component" data-hx-target="this" data-hx-include="this" data-hx-trigger="refresh" data-hx-get="https://wng.org/index.php?p=actions/sprig-core/components/render" data-hx-vals="{&quot;sprig:siteId&quot;:&quot;d54e772d49c363d0d88721dea06bad0f2d8d64444cdff7a8853d48c2f614f8e51&quot;,&quot;sprig:component&quot;:&quot;0996301313d78a74f76625c706a874387408a538e4abc78ebf8899e2f6431f43&quot;,&quot;sprig:template&quot;:&quot;bde50d835a635f4ba10c6b4d931e8c4faba9ca73a8f09a8b774328c8525b0a28components\/web-visitor-id-suppression.html&quot;}"></div>	<title>The World and Everything In It | WORLD</title>
// <script>dataLayer = [];
// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-WRN88GJ');
// </script><meta name="generator" content="SEOmatic">
// <meta name="keywords" content="WORLD, News, Breaking, USA, Biblical, Daily, National, Global, Cultural, Current">
// <meta name="description" content="WORLD is a news organization producing Biblically sound, daily coverage of global, national, and cultural current events.">
// <meta name="referrer" content="no-referrer-when-downgrade">
// <meta name="robots" content="all">
// <meta content="28814095885" property="fb:profile_id">
// <meta content="en_US" property="og:locale">
// <meta content="WORLD" property="og:site_name">
// <meta content="website" property="og:type">
// <meta content="https://wng.org/podcasts/the-world-and-everything-in-it" property="og:url">
// <meta content="The World and Everything In It" property="og:title">
// <meta content="WORLD is a news organization producing Biblically sound, daily coverage of global, national, and cultural current events." property="og:description">
// <meta content="https://www4.wng.org/_1200x630_crop_center-center_82_none/WORLD_Podcast-Cover_World-Everything_2021-04-05-035005_26.jpg?mtime=1668718594" property="og:image">
// <meta content="1200" property="og:image:width">
// <meta content="630" property="og:image:height">
// <meta content="WORLD is a news organization producing Biblically sound, daily coverage of global, national, and cultural current events." property="og:image:alt">
// <meta content="https://www.instagram.com/wngdotorg/" property="og:see_also">
// <meta content="https://www.facebook.com/wngdotorg" property="og:see_also">
// <meta content="https://twitter.com/WNGdotorg" property="og:see_also">
// <meta name="twitter:card" content="summary_large_image">
// <meta name="twitter:site" content="@WNGdotorg">
// <meta name="twitter:creator" content="@WNGdotorg">
// <meta name="twitter:title" content="The World and Everything In It">
// <meta name="twitter:description" content="WORLD is a news organization producing Biblically sound, daily coverage of global, national, and cultural current events.">
// <meta name="twitter:image" content="https://www4.wng.org/_800x418_crop_center-center_82_none/WORLD_Podcast-Cover_World-Everything_2021-04-05-035005_26.jpg?mtime=1668718594">
// <meta name="twitter:image:width" content="800">
// <meta name="twitter:image:height" content="418">
// <meta name="twitter:image:alt" content="WORLD is a news organization producing Biblically sound, daily coverage of global, national, and cultural current events.">
// <link href="https://wng.org/podcasts/the-world-and-everything-in-it" rel="canonical">
// <link href="https://wng.org" rel="home">
// <link type="text/plain" href="https://wng.org/humans.txt" rel="author"></head>
// <body><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRN88GJ"
// height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

// 	<span id="blitz-inject-1" class=" blitz-inject" data-blitz-id="1" data-blitz-uri="/components/alerts-banner" data-blitz-params="" data-blitz-property=""></span>

// 	<header class="container">
// 	<div class="row">
// 		<div class="col-md-4 pt-1 socials order-last order-md-first pt-3 pt-md-0">
// 			<a href="https://facebook.com/wngdotorg" aria-label="WORLD Facebook Page" target="_blank"><span style="display:none;">Facebook</span><i class="fab fa-facebook-f mr-1"></i></a>
// 			<a href="https://www.instagram.com/wngdotorg/" aria-label="WORLD Instagram Page" target="_blank"><span style="display:none;">Instagram</span><i class="fab fa-instagram mr-1"></i></a>
// 			<a href="https://twitter.com/WNGdotorg" aria-label="WORLD Twitter Page" target="_blank"><span style="display:none;">Twitter</span><i class="fa-brands fa-x-twitter"></i></a>
// 		</div>
// 		<div class="col-xs-3 col-sm-3 hamburger-col">
// 			<a href="javascript:void(0);" class="nav-toggle">
// 				<i class="fal fa-bars open-toggle"></i>
// 				<i class="fal fa-times close-toggle"></i>
// 			</a>
// 		</div>
// 		<div class="col-md-4 col-sm-6 col-xs-6 text-center">
// 			<a href="/">
// 				<img alt="Logo" src="/images/logo.svg">
// 			</a>
// 			<div class="slogan">Sound journalism, grounded in facts and Biblical truth <span class="d-inline-block d-md-none">| <a href="https://give.wng.org" target="_blank" class="gold" style="text-transform: none;">Donate</a></span></div>
// 		</div>
// 		<div class="col-xs-3 col-sm-3 show-mobile">
// 			<div class="nav-item mainMenuSearch">
// 				<a class="nav-link" href="/search"><svg class="svg-inline--fa fa-search fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg><!-- <i class="fas fa-search mr-2"></i> Font Awesome fontawesome.com --></a>
// 			</div>
// 		</div>
// 		<div class="mainLinks col-md-4 col-sm-12 col-xs-12">
// 			<ul class="list-inline">
// 																								<li class="list-inline-item display-member"><a href="https://subscribe.wng.org/Customer-Service/Account" class="pr-1" target="" >My Account</a>
// 																		<div class="inline-subMenu p-4">
// 								<div class="arrow-up"><div class="arrow-up inner"></div></div>
// 								<div class="w-100 d-flex flex-row justify-content-start">
// 									<ul class="col-lg-12">
// 																																	<li class="nav-item block w-100 display-member "><a class="nav-link" href="https://subscribe.wng.org/Customer-Service/Account" target="" >Update Preferences</a></li>

// 																																	<li class="nav-item block w-100 display-member "><a class="nav-link" href="/logout" target="" >Logout</a></li>


// 									</ul>
// 								</div>
// 							</div>
// 											</li>
// 																																											<li class="list-inline-item display-login"><a href="/member-login?redirect=/podcasts/the-world-and-everything-in-it" class="pr-1" target="" >Sign In</a>
// 																</li>
// 																									<li class="list-inline-item no-divider"><a href="/subscribe" class="pr-1" target="" >Subscribe</a>
// 																</li>
// 																									<li class="list-inline-item no-divider donate-button-navigation"><a href="https://raisedonors.com/worldnewsgroup/givetoworld" class="pr-1" target="_blank" data-track="donate-online">Give</a>
// 																		<div class="inline-subMenu p-4">
// 								<div class="arrow-up"><div class="arrow-up inner"></div></div>
// 								<div class="w-100 d-flex flex-row justify-content-start">
// 									<ul class="col-lg-12">
// 																																	<li class="nav-item block w-100 mb-1 "><a class="nav-link" href="https://give.wng.org" target="_blank" data-track="donate-online">Give Online</a></li>

// 																																	<li class="nav-item block w-100 mb-1 "><a class="nav-link" href="/mail" target="_blank" >Give by Mail or Phone</a></li>

// 																																	<li class="nav-item block w-100 mb-1 "><a class="nav-link" href="https://wng.org/give-stock" target="_blank" >Give Stock</a></li>

// 																																	<li class="nav-item block w-100  "><a class="nav-link" href="/give-through-donor-advised-fund" target="_blank" >Give through Donor Advised Fund</a></li>

// 																																	<li class="nav-item block w-100  "><a class="nav-link" href="https://www.cardonationwizard.com/world-magazine/info/car-donation.html" target="_blank" >Donate your Vehicle</a></li>

// 																																	<li class="nav-item block w-100  "><a class="nav-link" href="https://wng.org/estate-planning" target="" >Estate Planning</a></li>


// 									</ul>
// 								</div>
// 							</div>
// 											</li>
// 																																																																		</ul>
// 		</div>
// 		<div class="col-md-12">
// 			<div class="row navigation">
// 				<div class="col-md-12">
// 					<ul id="#mainMenu" class="nav d-flex flex-row flex-wrap justify-content-center w-100">
// 																											<li class="nav-item has-sub-nav  hide-dropdown">
// 									<a class="nav-link sub-nav-toggle hide-dropdown" href="/sift" >The Sift</a>
// 																	</li>
// 																																									<li class="nav-item has-sub-nav  hide-dropdown">
// 									<a class="nav-link sub-nav-toggle hide-dropdown" href="/roundups" >Roundups</a>
// 																	</li>
// 																																																																																																																																																																																																																																																																						<li class="nav-item has-sub-nav  hide-dropdown">
// 									<a class="nav-link sub-nav-toggle hide-dropdown" href="/opinions" >Opinions</a>
// 																	</li>
// 																																									<li class="nav-item has-sub-nav  hide-dropdown">
// 									<a class="nav-link sub-nav-toggle hide-dropdown" href="https://wng.org/podcasts" >Podcasts</a>
// 																	</li>
// 																																																																																																																																																																																																					<li class="nav-item  ">
// 									<a class="nav-link" href="/magazine" >Magazine</a>
// 																	</li>
// 																												<li class="nav-item  ">
// 									<a class="nav-link" href="/topics/culture-arts/books" >Books</a>
// 																	</li>
// 																												<li class="nav-item  ">
// 									<a class="nav-link" href="/topics/culture-arts/movies" >Movies</a>
// 																	</li>
// 																												<li class="nav-item has-sub-nav  ">
// 									<a class="nav-link sub-nav-toggle " href="/" ="">Topics</a>
// 																		<div class="subMenu p-4">
// 										<div class="arrow-up"><div class="arrow-up inner"></div></div>
// 										<div class="w-100 d-flex flex-row justify-content-start">
// 											<ul class="col-lg-8">
// 																																						<li class="nav-item trending"><a class="nav-link" href="/tags/paris-olympics" >Paris Olympics</a></li>

// 																																						<li class="nav-item trending"><a class="nav-link" href="/tags/campaign-2024" >Campaign 2024</a></li>

// 																																						<li class="nav-item trending"><a class="nav-link" href="/tags/trump-shooting" >Trump Shooting</a></li>

// 																																						<li class="nav-item trending"><a class="nav-link" href="/tags/trump-trials" >Trump Trials</a></li>

// 																																						<li class="nav-item trending"><a class="nav-link" href="/tags/israel-hamas-war" >Israel-Hamas War</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/business-economy" >Business</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/effective-compassion" >Compassion</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/culture-arts" >Culture</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/education" >Education</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/faith-religion" >Faith</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/family-society" >Family</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/international" >International</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/politics" >Politics</a></li>

// 																																						<li class="nav-item "><a class="nav-link" href="https://wng.org/topics/science-tech" >Science</a></li>




// 											</ul>
// 											<ul class="columnsList col-lg-4 pl-3">
// 												<li class="menuListTitle">Columns</li>














// 																																						<li class="nav-item"><a class="nav-link" href="https://wng.org/branding/voices" >Voices</a></li>

// 																																						<li class="nav-item"><a class="nav-link" href="/opinions" >Opinions</a></li>


// 											</ul>
// 										</div>
// 										<a class="bottomMenuSearchLink" href="/search">Search Archives</a>
// 										<a class="bottomMenuSearchLink sub-nav-hide show-mobile pt-3" href="javascript:void(0);"><i class="fal fa-long-arrow-left"></i> Return to Main Menu</a>
// 									</div>
// 																	</li>
// 																																																																																																																																																																																																																																												<li class="nav-item  ">
// 									<a class="nav-link" href="https://wng.org/election2024" >Election Center 2024</a>
// 																	</li>
// 																												<li class="nav-item mainMenuSearch ">
// 									<a class="nav-link" href="/search" ><i class="fas fa-search mr-2"></i>Search</a>
// 																	</li>
// 																		</ul>
// 				</div>
// 			</div>
// 		</div>
// 		<div class="col-md-12 hide-open-border"><div style="border-bottom: 1px solid black;"></div></div>
// 	</div>
// </header>	<style>header .navigation {margin-bottom:0;}</style>

// 	<div class="container sub-nav-container">
// 		<div class="subnavigation">
// 			<div class="flex">
// 				<div class="category-title">

// 																<a href="/podcasts/the-world-and-everything-in-it">The World and Everything in It</a>
// 										</a>
// 				</div>
// 				<div class="category-list">
// 					<ul class="nav">
// 						<li class="nav-item show-mobile">
// 							<a class="nav-link" href="/podcasts/the-world-and-everything-in-it">
// 								The World and Everything in It
// 							</a>
// 						</li>
// 																																																																																																											<li class="nav-item ">
// 									<a class="nav-link " href="https://wng.org/podcasts/the-world-and-everything-in-it/team">Team</a>
// 								</li>
// 															<li class="nav-item ">
// 									<a class="nav-link " href="https://wng.org/podcasts/the-world-and-everything-in-it/record-a-preroll">Record a Preroll</a>
// 								</li>
// 															<li class="nav-item ">
// 									<a class="nav-link " href="https://wng.org/platforms">Platforms</a>
// 								</li>
// 																							</ul>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div class="the-add mt-3 mt-md-4">



// <article class="container mb-5">
// 	<div class="row my-4">
// 		<div class="col-12">
// 			<div style="position: relative;">
// 				<div class=" relative">
// 					<div class=" relative overflow-hidden">
// 											</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>

// 	<div class="row">
// 		<div class="col-md-4 mb-4 d-flex flex-row flex-wrap">

// 			<div class="w-50 pr-3">
// 															<img class="img-fluid" src="https://www4.wng.org/WORLD_Podcast-Cover_World-Everything_2021-04-05-035005.jpg" alt="WORLD Podcast Cover World Everything">
// 												</div>
// 			<div class="w-50 category-description-text">
// 				<a href="/podcasts"><h6 class="podcast-small-header">SUBSCRIBE FOR FREE</h6></a>
// 															<a href="https://podcasts.apple.com/us/podcast/the-world-and-everything-in-it/id454755642" target="1" class="podcast-provider-icon">
// 							<img src="https://www4.wng.org/apple-podcasts_2022-06-03-021611.png" alt="Apple" />
// 						</a>
// 																				<a href="https://www.stitcher.com/show/the-world-and-everything-in-it" target="1" class="podcast-provider-icon">
// 							<img src="https://www4.wng.org/stitch-podcasts_2022-06-03-021621.png" alt="Stitcher" />
// 						</a>
// 																				<a href="https://open.spotify.com/show/0t7yzWd8mjHt6GVd73vEox" target="1" class="podcast-provider-icon">
// 							<img src="https://www4.wng.org/spotify-podcasts_2022-06-03-021617.png" alt="Spotify" />
// 						</a>
// 													<p class="mt-1">Find our program on your favorite podcast app. Click into the episodes below for full transcripts.</p>
// 			</div>
// 		</div>
// 		<div class="col-md-8">
// 			<p><em>The World and Everything in It</em> is an Apple Podcasts top 100 News program delivering essential headlines, field reporting, interviews, and expert analysis every weekday. Hear original coverage such as a weekly overview of every Supreme Court case, biblical cultural analysis, and key international stories. </p>
// 		</div>
// 	</div>
// 	<hr class="mt-2 mb-4 podcastDivider" class="w-100" style="position: relative;">
// 	<div  id="categoryPodcasts">
// 		<Filter />
// 	</div>
// 	<h6 class="podcast-small-header mt-4" id="latest-heading">Latest</h6>
// 	<div id="component-bzkejw" class="sprig-component" data-hx-target="this" data-hx-include="this" data-hx-trigger="load" data-hx-get="https://wng.org/index.php?p=actions/sprig-core/components/render" data-hx-vals="{&quot;sprig:siteId&quot;:&quot;d54e772d49c363d0d88721dea06bad0f2d8d64444cdff7a8853d48c2f614f8e51&quot;,&quot;sprig:component&quot;:&quot;0996301313d78a74f76625c706a874387408a538e4abc78ebf8899e2f6431f43&quot;,&quot;sprig:template&quot;:&quot;87ad68596137bcccb80d6c1a870376fa885b1ac70abe04770b041ac12b6ab5f3components\/podcasts&quot;,&quot;sprig:variables[categorySlug]&quot;:&quot;c73c67ba6e46494bc8d7b4cd51dd99c58e7591e8ab078c3c5c9c4cca4264659ethe-world-and-everything-in-it&quot;}" s-trigger="load">

// <div class="row" style="justify-content: center;">
// 	<div class="col-md-4 mb-4">
// 		<select id="episodeType" class="block px-3 pt-2 pb-1 text-md w-100 text-center" name="episodeType" sprig s-trigger="change" s-val:type="episodeType" s-replace="#results" data-hx-get="https://wng.org/index.php?p=actions/sprig-core/components/render" data-hx-trigger="change" data-hx-vals="{&quot;type&quot;:&quot;episodeType&quot;}" data-hx-select="#results" data-hx-target="#results" data-hx-swap="outerHTML" data-sprig-parsed>
// 		    <option value="">All Episodes</option>
// 		    <option value="Full">Full Episode</option>
// 		    <option value="Segment">Episode Segment</option>
// 	    </select>
// 	</div>
//     <div class="col-md-4 mb-4">
// 	    <select id="topic" class="block px-3 pt-2 pb-1 text-md w-100 text-center" name="topic" sprig s-trigger="change" s-val:type="topic" s-replace="#results" data-hx-get="https://wng.org/index.php?p=actions/sprig-core/components/render" data-hx-trigger="change" data-hx-vals="{&quot;type&quot;:&quot;topic&quot;}" data-hx-select="#results" data-hx-target="#results" data-hx-swap="outerHTML" data-sprig-parsed>
// 		    <option value="">Topic</option>
// 	    		    <option value="family-society">Family & Society</option>
// 				    <option value="pro-life">&nbsp;&nbsp; Pro-Life</option>
// 				    <option value="marriage">&nbsp;&nbsp; Marriage</option>
// 				    <option value="parenting">&nbsp;&nbsp; Parenting</option>
// 				    <option value="children">&nbsp;&nbsp; Children</option>
// 				    <option value="sexuality">&nbsp;&nbsp; Sexuality</option>
// 				    <option value="grief-suffering">&nbsp;&nbsp; Grief & Suffering</option>
// 				    <option value="aging">&nbsp;&nbsp; Aging</option>
// 				    <option value="crime">&nbsp;&nbsp; Crime</option>
// 				    <option value="penal-system">&nbsp;&nbsp; Penal System</option>
// 				    <option value="race">&nbsp;&nbsp; Race</option>
// 				    <option value="natural-disaster">&nbsp;&nbsp; Natural Disaster</option>
// 				    <option value="faith-religion">Faith & Religion</option>
// 				    <option value="devotional">&nbsp;&nbsp; Devotional</option>
// 				    <option value="scandal">&nbsp;&nbsp; Scandal</option>
// 				    <option value="controversy">&nbsp;&nbsp; Controversy</option>
// 				    <option value="evangelicalism">&nbsp;&nbsp; Evangelicalism</option>
// 				    <option value="denominations">&nbsp;&nbsp; Denominations</option>
// 				    <option value="catholicism">&nbsp;&nbsp; Catholicism</option>
// 				    <option value="islam">&nbsp;&nbsp; Islam</option>
// 				    <option value="other-religions">&nbsp;&nbsp; Other Religions</option>
// 				    <option value="religious-liberty">&nbsp;&nbsp; Religious Liberty</option>
// 				    <option value="missions">&nbsp;&nbsp; Missions</option>
// 				    <option value="education">Education</option>
// 				    <option value="pre-school">&nbsp;&nbsp; Pre-School</option>
// 				    <option value="k-12">&nbsp;&nbsp; K-12</option>
// 				    <option value="higher-education">&nbsp;&nbsp; Higher Education</option>
// 				    <option value="homeschooling">&nbsp;&nbsp; Homeschooling</option>
// 				    <option value="christian-schools">&nbsp;&nbsp; Christian schools</option>
// 				    <option value="public-schools">&nbsp;&nbsp; Public Schools</option>
// 				    <option value="vouchers-choice">&nbsp;&nbsp; Vouchers/Choice</option>
// 				    <option value="effective-compassion">Effective Compassion</option>
// 				    <option value="homelessness">&nbsp;&nbsp; Homelessness</option>
// 				    <option value="hunger">&nbsp;&nbsp; Hunger</option>
// 				    <option value="unemployment">&nbsp;&nbsp; Unemployment</option>
// 				    <option value="sex-trafficking">&nbsp;&nbsp; Sex Trafficking</option>
// 				    <option value="charity">&nbsp;&nbsp; Charity</option>
// 				    <option value="ministries">&nbsp;&nbsp; Ministries</option>
// 				    <option value="philanthropy">&nbsp;&nbsp; Philanthropy</option>
// 				    <option value="poverty">&nbsp;&nbsp; Poverty</option>
// 				    <option value="culture-arts">Culture & Arts</option>
// 				    <option value="movies">&nbsp;&nbsp; Movies</option>
// 				    <option value="music">&nbsp;&nbsp; Music</option>
// 				    <option value="books">&nbsp;&nbsp; Books</option>
// 				    <option value="childrens-book">&nbsp;&nbsp; Children's Books</option>
// 				    <option value="tv">&nbsp;&nbsp; TV</option>
// 				    <option value="art">&nbsp;&nbsp; Art</option>
// 				    <option value="theatre">&nbsp;&nbsp; Theatre</option>
// 				    <option value="sports">&nbsp;&nbsp; Sports</option>
// 				    <option value="media">&nbsp;&nbsp; Media</option>
// 				    <option value="history">&nbsp;&nbsp; History</option>
// 				    <option value="politics">Politics</option>
// 				    <option value="congress">&nbsp;&nbsp; Congress</option>
// 				    <option value="supreme-court">&nbsp;&nbsp; Supreme Court</option>
// 				    <option value="white-house">&nbsp;&nbsp; White House</option>
// 				    <option value="courts">&nbsp;&nbsp; Courts</option>
// 				    <option value="state">&nbsp;&nbsp; State</option>
// 				    <option value="cities">&nbsp;&nbsp; Cities</option>
// 				    <option value="elections">&nbsp;&nbsp; Elections</option>
// 				    <option value="first-amendment">&nbsp;&nbsp; First Amendment</option>
// 				    <option value="legislation">&nbsp;&nbsp; Legislation</option>
// 				    <option value="military">&nbsp;&nbsp; Military</option>
// 				    <option value="government">&nbsp;&nbsp; Government</option>
// 				    <option value="policy">&nbsp;&nbsp; Policy</option>
// 				    <option value="business-economy">Business & Economy</option>
// 				    <option value="money">&nbsp;&nbsp; Money</option>
// 				    <option value="markets">&nbsp;&nbsp; Markets</option>
// 				    <option value="work-vocation">&nbsp;&nbsp; Work/Vocation</option>
// 				    <option value="big-business">&nbsp;&nbsp; Big Business</option>
// 				    <option value="small-business">&nbsp;&nbsp; Small Business</option>
// 				    <option value="entrepreneurs">&nbsp;&nbsp; Entrepreneurs</option>
// 				    <option value="unemployment-jobs">&nbsp;&nbsp; Unemployment/Jobs</option>
// 				    <option value="regulations">&nbsp;&nbsp; Regulations</option>
// 				    <option value="science-tech">Science & Tech</option>
// 				    <option value="discoveries">&nbsp;&nbsp; Discoveries</option>
// 				    <option value="intelligent-design">&nbsp;&nbsp; Intelligent Design</option>
// 				    <option value="new-products">&nbsp;&nbsp; New Products</option>
// 				    <option value="energy">&nbsp;&nbsp; Energy</option>
// 				    <option value="environment">&nbsp;&nbsp; Environment</option>
// 				    <option value="health">&nbsp;&nbsp; Health</option>
// 				    <option value="weather">&nbsp;&nbsp; Weather</option>
// 				    <option value="international">International</option>
// 				    <option value="political-unrest">&nbsp;&nbsp; Political Unrest</option>
// 				    <option value="persecution">&nbsp;&nbsp; Persecution</option>
// 				    <option value="terrorism">&nbsp;&nbsp; Terrorism</option>
// 				    <option value="war">&nbsp;&nbsp; War</option>
// 				    <option value="church-movements">&nbsp;&nbsp; Church Movements</option>
// 				    <option value="disasters">&nbsp;&nbsp; Disasters</option>
// 				    <option value="offbeat">Offbeat</option>
// 				    <option value="quick-takes">&nbsp;&nbsp; Quick-Takes</option>
// 				    <option value="segments">Segments</option>
// 				    <option value="culture-friday">&nbsp;&nbsp; Culture Friday</option>
// 				    <option value="kicker">&nbsp;&nbsp; Kicker</option>
// 				    <option value="listener-feedback">&nbsp;&nbsp; Listener Feedback</option>
// 				    <option value="legal-docket">&nbsp;&nbsp; Legal Docket</option>
// 			    </select>
//     </div>
//     <div class="col-md-4 mb-4">
// 	    <select id="monthYear" class="block px-3 pt-2 pb-1 text-md w-100 text-center" name="monthYear" sprig s-trigger="change" s-val:type="monthYear" s-replace="#results" data-hx-get="https://wng.org/index.php?p=actions/sprig-core/components/render" data-hx-trigger="change" data-hx-vals="{&quot;type&quot;:&quot;monthYear&quot;}" data-hx-select="#results" data-hx-target="#results" data-hx-swap="outerHTML" data-sprig-parsed>
// 		    <option value="">Month</option>
// 															<option value="2024-12-01">Dec 2024</option>
// 									<option value="2024-11-01">Nov 2024</option>
// 									<option value="2024-10-01">Oct 2024</option>
// 									<option value="2024-9-01">Sep 2024</option>
// 									<option value="2024-8-01">Aug 2024</option>
// 									<option value="2024-7-01">Jul 2024</option>
// 									<option value="2024-6-01">Jun 2024</option>
// 									<option value="2024-5-01">May 2024</option>
// 									<option value="2024-4-01">Apr 2024</option>
// 									<option value="2024-3-01">Mar 2024</option>
// 									<option value="2024-2-01">Feb 2024</option>
// 									<option value="2024-1-01">Jan 2024</option>

// 												<option value="2023-12-01">Dec 2023</option>
// 									<option value="2023-11-01">Nov 2023</option>
// 									<option value="2023-10-01">Oct 2023</option>
// 									<option value="2023-9-01">Sep 2023</option>
// 									<option value="2023-8-01">Aug 2023</option>
// 									<option value="2023-7-01">Jul 2023</option>
// 									<option value="2023-6-01">Jun 2023</option>
// 									<option value="2023-5-01">May 2023</option>
// 									<option value="2023-4-01">Apr 2023</option>
// 									<option value="2023-3-01">Mar 2023</option>
// 									<option value="2023-2-01">Feb 2023</option>
// 									<option value="2023-1-01">Jan 2023</option>

// 												<option value="2022-12-01">Dec 2022</option>
// 									<option value="2022-11-01">Nov 2022</option>
// 									<option value="2022-10-01">Oct 2022</option>
// 									<option value="2022-9-01">Sep 2022</option>
// 									<option value="2022-8-01">Aug 2022</option>
// 									<option value="2022-7-01">Jul 2022</option>
// 									<option value="2022-6-01">Jun 2022</option>
// 									<option value="2022-5-01">May 2022</option>
// 									<option value="2022-4-01">Apr 2022</option>
// 									<option value="2022-3-01">Mar 2022</option>
// 									<option value="2022-2-01">Feb 2022</option>
// 									<option value="2022-1-01">Jan 2022</option>

// 												<option value="2021-12-01">Dec 2021</option>
// 									<option value="2021-11-01">Nov 2021</option>
// 									<option value="2021-10-01">Oct 2021</option>
// 									<option value="2021-9-01">Sep 2021</option>
// 									<option value="2021-8-01">Aug 2021</option>
// 									<option value="2021-7-01">Jul 2021</option>
// 									<option value="2021-6-01">Jun 2021</option>
// 									<option value="2021-5-01">May 2021</option>
// 									<option value="2021-4-01">Apr 2021</option>
// 									<option value="2021-3-01">Mar 2021</option>
// 									<option value="2021-2-01">Feb 2021</option>
// 									<option value="2021-1-01">Jan 2021</option>

// 												<option value="2020-12-01">Dec 2020</option>
// 									<option value="2020-11-01">Nov 2020</option>
// 									<option value="2020-10-01">Oct 2020</option>
// 									<option value="2020-9-01">Sep 2020</option>
// 									<option value="2020-8-01">Aug 2020</option>
// 									<option value="2020-7-01">Jul 2020</option>
// 									<option value="2020-6-01">Jun 2020</option>
// 									<option value="2020-5-01">May 2020</option>
// 									<option value="2020-4-01">Apr 2020</option>
// 									<option value="2020-3-01">Mar 2020</option>
// 									<option value="2020-2-01">Feb 2020</option>
// 									<option value="2020-1-01">Jan 2020</option>

// 												<option value="2019-12-01">Dec 2019</option>
// 									<option value="2019-11-01">Nov 2019</option>
// 									<option value="2019-10-01">Oct 2019</option>
// 									<option value="2019-9-01">Sep 2019</option>
// 									<option value="2019-8-01">Aug 2019</option>
// 									<option value="2019-7-01">Jul 2019</option>
// 									<option value="2019-6-01">Jun 2019</option>
// 									<option value="2019-5-01">May 2019</option>
// 									<option value="2019-4-01">Apr 2019</option>
// 									<option value="2019-3-01">Mar 2019</option>
// 									<option value="2019-2-01">Feb 2019</option>
// 									<option value="2019-1-01">Jan 2019</option>

// 												<option value="2018-12-01">Dec 2018</option>
// 									<option value="2018-11-01">Nov 2018</option>
// 									<option value="2018-10-01">Oct 2018</option>
// 									<option value="2018-9-01">Sep 2018</option>
// 									<option value="2018-8-01">Aug 2018</option>
// 									<option value="2018-7-01">Jul 2018</option>
// 									<option value="2018-6-01">Jun 2018</option>
// 									<option value="2018-5-01">May 2018</option>
// 									<option value="2018-4-01">Apr 2018</option>
// 									<option value="2018-3-01">Mar 2018</option>
// 									<option value="2018-2-01">Feb 2018</option>
// 									<option value="2018-1-01">Jan 2018</option>

// 				    </select>
//     </div>
// </div>

// <div class="row mb-5" id="results">








//     	    				    <podcast-player class="w-100" v-bind:src="https://dts.podtrac.com/redirect.mp3/https://wng.org/podcasts/the-world-and-everything-in-it-august-8-2024-1723048334" />
// 			<div class="podcastCard position-relative d-flex flex-row flex-wrap justify-content-start w-100" data-postDate="08-08-2024">
// 								<div class="col-3">
// 					<a href="https://wng.org/podcasts/the-world-and-everything-in-it-august-8-2024-1723048334">
// 						<img class="img-fluid" src="https://www4.wng.org/AP21252659018409-FULL-TWE.jpg" alt="AP21252659018409 FULL TWE">
// 					</a>
// 				</div>
// 								<div class="col-9">
// 					<a href="https://wng.org/podcasts/the-world-and-everything-in-it-august-8-2024-1723048334">
// 					<h5 class="">The World and Everything in It: August 8, 2024</h5>
// 					</a>
// 					<p>Trial postponed for the alleged 9/11 mastermind, parents take a stand against the new Title IX guidelines, and a soup kitchen changes a chef’s life. Plus, an update from Mary Reichard, Cal Thomas on the Secret Service, and the Thursday morning news</p>
// 					<!-- Podcast Player -->
// 					<div class="d-flex flex-row justify-content-start podcast-player px-2 py-1" id="podcastDiv-1">
// 						<div class="podcastControls d-flex flex-row justify-content-start align-items-center mh-100" id="podcastController-1">
// 							<span id="podcastLoading-1" class="fa-stack">
// 							  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 							  <i class="fas fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
// 							</span>
// 							<div id="podcastRw-1" onclick="rewindClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="rewind fas fa-undo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastPlayer-1" onclick="playClip('https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/The-World-and-Everything-in-It-August-8-2024.mp3', this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="play fas fa-caret-right fa-stack-1x fa-inverse" style="font-size: 1.5em;"></i>
// 								  <i class="pause fas fa-pause fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastFf-1" onclick="fastforwardClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-redo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastMute-1" onclick="mute(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="mute fas fa-volume-mute fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolume-1" onclick="toggleVolumeModal(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fas fa-volume-up fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolumeModal-1" class="volume-modal">
// 								<input id="podcastVolumeInput-1" type="range" min="0" max="1" step="0.1" oninput="changeVolume(this)">
// 							</div>
// 							<div id="podcastProgress-1" class="podcast-play-btn progress-modal">
// 								<input id="podcastProgressComplete-1" type="range" min="1" max="100" value="0" class="styled-slider slider-progress" onclick="seekProgress(event, event.target.value)" ontouchend="seekProgress(event, event.target.value)">
// 							</div>
// 							<div id="podcast-timeRemaining-1" class="podcast-time-remaining">
// 								0:00
// 							</div>

// 						</div>
// 						<div class="podcast-description"><p>WORLD Radio - The World and Everything in It: August 8, 2024</p></div>
// 						<div class="podcast-download">
// 							<a download href="https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/The-World-and-Everything-in-It-August-8-2024.mp3" class="white">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-cloud-download-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</a>
// 						</div>
// 					</div>
// 					<!-- end of podcast player -->

// 				</div>
// 			</div>
// 						<hr class="mx-3 w-100 podcastDivider">
// 				    				    <podcast-player class="w-100" v-bind:src="https://dts.podtrac.com/redirect.mp3/https://wng.org/podcasts/thursday-morning-news-august-8-2024-1723055220" />
// 			<div class="podcastCard position-relative d-flex flex-row flex-wrap justify-content-start w-100" data-postDate="08-08-2024">
// 								<div class="col-3">
// 					<a href="https://wng.org/podcasts/thursday-morning-news-august-8-2024-1723055220">
// 						<img class="img-fluid" src="https://www4.wng.org/AP24220679693424-TWE.jpg" alt="AP24220679693424 TWE">
// 					</a>
// 				</div>
// 								<div class="col-9">
// 					<a href="https://wng.org/podcasts/thursday-morning-news-august-8-2024-1723055220">
// 					<h5 class="">Thursday morning news: August 8, 2024</h5>
// 					</a>
// 					<p>News of the day, including the two presidential campaigns visit the swing states and the EPA bans a pesticide that harms unborn babies</p>
// 					<!-- Podcast Player -->
// 					<div class="d-flex flex-row justify-content-start podcast-player px-2 py-1" id="podcastDiv-2">
// 						<div class="podcastControls d-flex flex-row justify-content-start align-items-center mh-100" id="podcastController-2">
// 							<span id="podcastLoading-2" class="fa-stack">
// 							  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 							  <i class="fas fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
// 							</span>
// 							<div id="podcastRw-2" onclick="rewindClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="rewind fas fa-undo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastPlayer-2" onclick="playClip('https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/Thursday-morning-news-August-8-2024.mp3', this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="play fas fa-caret-right fa-stack-1x fa-inverse" style="font-size: 1.5em;"></i>
// 								  <i class="pause fas fa-pause fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastFf-2" onclick="fastforwardClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-redo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastMute-2" onclick="mute(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="mute fas fa-volume-mute fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolume-2" onclick="toggleVolumeModal(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fas fa-volume-up fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolumeModal-2" class="volume-modal">
// 								<input id="podcastVolumeInput-2" type="range" min="0" max="1" step="0.1" oninput="changeVolume(this)">
// 							</div>
// 							<div id="podcastProgress-2" class="podcast-play-btn progress-modal">
// 								<input id="podcastProgressComplete-2" type="range" min="1" max="100" value="0" class="styled-slider slider-progress" onclick="seekProgress(event, event.target.value)" ontouchend="seekProgress(event, event.target.value)">
// 							</div>
// 							<div id="podcast-timeRemaining-2" class="podcast-time-remaining">
// 								0:00
// 							</div>

// 						</div>
// 						<div class="podcast-description"><p>WORLD Radio - Thursday morning news: August 8, 2024</p></div>
// 						<div class="podcast-download">
// 							<a download href="https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/Thursday-morning-news-August-8-2024.mp3" class="white">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-cloud-download-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</a>
// 						</div>
// 					</div>
// 					<!-- end of podcast player -->

// 				</div>
// 			</div>
// 						<hr class="mx-3 w-100 podcastDivider">
// 				    				    <podcast-player class="w-100" v-bind:src="https://dts.podtrac.com/redirect.mp3/https://wng.org/podcasts/9-11-remains-unresolved-1723065701" />
// 			<div class="podcastCard position-relative d-flex flex-row flex-wrap justify-content-start w-100" data-postDate="08-08-2024">
// 								<div class="col-3">
// 					<a href="https://wng.org/podcasts/9-11-remains-unresolved-1723065701">
// 						<img class="img-fluid" src="https://www4.wng.org/AP03030101654-TWE.jpg" alt="AP03030101654 TWE">
// 					</a>
// 				</div>
// 								<div class="col-9">
// 					<a href="https://wng.org/podcasts/9-11-remains-unresolved-1723065701">
// 					<h5 class="">9/11 remains unresolved</h5>
// 					</a>
// 					<p>Obstacles continue to prevent the trial of the alleged 9/11 mastermind from moving forward</p>
// 					<!-- Podcast Player -->
// 					<div class="d-flex flex-row justify-content-start podcast-player px-2 py-1" id="podcastDiv-3">
// 						<div class="podcastControls d-flex flex-row justify-content-start align-items-center mh-100" id="podcastController-3">
// 							<span id="podcastLoading-3" class="fa-stack">
// 							  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 							  <i class="fas fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
// 							</span>
// 							<div id="podcastRw-3" onclick="rewindClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="rewind fas fa-undo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastPlayer-3" onclick="playClip('https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/9-11-remains-unresolved.mp3', this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="play fas fa-caret-right fa-stack-1x fa-inverse" style="font-size: 1.5em;"></i>
// 								  <i class="pause fas fa-pause fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastFf-3" onclick="fastforwardClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-redo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastMute-3" onclick="mute(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="mute fas fa-volume-mute fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolume-3" onclick="toggleVolumeModal(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fas fa-volume-up fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolumeModal-3" class="volume-modal">
// 								<input id="podcastVolumeInput-3" type="range" min="0" max="1" step="0.1" oninput="changeVolume(this)">
// 							</div>
// 							<div id="podcastProgress-3" class="podcast-play-btn progress-modal">
// 								<input id="podcastProgressComplete-3" type="range" min="1" max="100" value="0" class="styled-slider slider-progress" onclick="seekProgress(event, event.target.value)" ontouchend="seekProgress(event, event.target.value)">
// 							</div>
// 							<div id="podcast-timeRemaining-3" class="podcast-time-remaining">
// 								0:00
// 							</div>

// 						</div>
// 						<div class="podcast-description"><p>WORLD Radio - 9/11 remains unresolved</p></div>
// 						<div class="podcast-download">
// 							<a download href="https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/9-11-remains-unresolved.mp3" class="white">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-cloud-download-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</a>
// 						</div>
// 					</div>
// 					<!-- end of podcast player -->

// 				</div>
// 			</div>
// 						<hr class="mx-3 w-100 podcastDivider">
// 				    				    <podcast-player class="w-100" v-bind:src="https://dts.podtrac.com/redirect.mp3/https://wng.org/podcasts/parents-stand-against-title-ix-changes-1723061306" />
// 			<div class="podcastCard position-relative d-flex flex-row flex-wrap justify-content-start w-100" data-postDate="08-08-2024">
// 								<div class="col-3">
// 					<a href="https://wng.org/podcasts/parents-stand-against-title-ix-changes-1723061306">
// 						<img class="img-fluid" src="https://www4.wng.org/AP23313043884033-TWE.jpg" alt="AP23313043884033 TWE">
// 					</a>
// 				</div>
// 								<div class="col-9">
// 					<a href="https://wng.org/podcasts/parents-stand-against-title-ix-changes-1723061306">
// 					<h5 class="">Parents stand against Title IX changes</h5>
// 					</a>
// 					<p>Moms for Liberty takes action to exempt schools from implementing the new regulations in order to protect students</p>
// 					<!-- Podcast Player -->
// 					<div class="d-flex flex-row justify-content-start podcast-player px-2 py-1" id="podcastDiv-4">
// 						<div class="podcastControls d-flex flex-row justify-content-start align-items-center mh-100" id="podcastController-4">
// 							<span id="podcastLoading-4" class="fa-stack">
// 							  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 							  <i class="fas fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
// 							</span>
// 							<div id="podcastRw-4" onclick="rewindClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="rewind fas fa-undo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastPlayer-4" onclick="playClip('https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/Parents-stand-against-Title-IX-changes.mp3', this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="play fas fa-caret-right fa-stack-1x fa-inverse" style="font-size: 1.5em;"></i>
// 								  <i class="pause fas fa-pause fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastFf-4" onclick="fastforwardClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-redo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastMute-4" onclick="mute(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="mute fas fa-volume-mute fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolume-4" onclick="toggleVolumeModal(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fas fa-volume-up fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolumeModal-4" class="volume-modal">
// 								<input id="podcastVolumeInput-4" type="range" min="0" max="1" step="0.1" oninput="changeVolume(this)">
// 							</div>
// 							<div id="podcastProgress-4" class="podcast-play-btn progress-modal">
// 								<input id="podcastProgressComplete-4" type="range" min="1" max="100" value="0" class="styled-slider slider-progress" onclick="seekProgress(event, event.target.value)" ontouchend="seekProgress(event, event.target.value)">
// 							</div>
// 							<div id="podcast-timeRemaining-4" class="podcast-time-remaining">
// 								0:00
// 							</div>

// 						</div>
// 						<div class="podcast-description"><p>WORLD Radio - Parents stand against Title IX changes</p></div>
// 						<div class="podcast-download">
// 							<a download href="https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/Parents-stand-against-Title-IX-changes.mp3" class="white">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-cloud-download-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</a>
// 						</div>
// 					</div>
// 					<!-- end of podcast player -->

// 				</div>
// 			</div>
// 						<hr class="mx-3 w-100 podcastDivider">
// 				    				    <podcast-player class="w-100" v-bind:src="https://dts.podtrac.com/redirect.mp3/https://wng.org/podcasts/reporting-for-treatment-1723065549" />
// 			<div class="podcastCard position-relative d-flex flex-row flex-wrap justify-content-start w-100" data-postDate="08-08-2024">
// 								<div class="col-3">
// 					<a href="https://wng.org/podcasts/reporting-for-treatment-1723065549">
// 						<img class="img-fluid" src="https://www4.wng.org/GettyImages-1152442775-TWE.jpg" alt="Getty Images 1152442775 TWE">
// 					</a>
// 				</div>
// 								<div class="col-9">
// 					<a href="https://wng.org/podcasts/reporting-for-treatment-1723065549">
// 					<h5 class="">Reporting for treatment</h5>
// 					</a>
// 					<p>Mary Reichard reflects on hospital inconveniences that make treatment possible</p>
// 					<!-- Podcast Player -->
// 					<div class="d-flex flex-row justify-content-start podcast-player px-2 py-1" id="podcastDiv-5">
// 						<div class="podcastControls d-flex flex-row justify-content-start align-items-center mh-100" id="podcastController-5">
// 							<span id="podcastLoading-5" class="fa-stack">
// 							  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 							  <i class="fas fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
// 							</span>
// 							<div id="podcastRw-5" onclick="rewindClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="rewind fas fa-undo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastPlayer-5" onclick="playClip('https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/Reporting-for-treatment.mp3', this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="play fas fa-caret-right fa-stack-1x fa-inverse" style="font-size: 1.5em;"></i>
// 								  <i class="pause fas fa-pause fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastFf-5" onclick="fastforwardClip(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-redo-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastMute-5" onclick="mute(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="mute fas fa-volume-mute fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolume-5" onclick="toggleVolumeModal(this)">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fas fa-volume-up fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</div>
// 							<div id="podcastVolumeModal-5" class="volume-modal">
// 								<input id="podcastVolumeInput-5" type="range" min="0" max="1" step="0.1" oninput="changeVolume(this)">
// 							</div>
// 							<div id="podcastProgress-5" class="podcast-play-btn progress-modal">
// 								<input id="podcastProgressComplete-5" type="range" min="1" max="100" value="0" class="styled-slider slider-progress" onclick="seekProgress(event, event.target.value)" ontouchend="seekProgress(event, event.target.value)">
// 							</div>
// 							<div id="podcast-timeRemaining-5" class="podcast-time-remaining">
// 								0:00
// 							</div>

// 						</div>
// 						<div class="podcast-description"><p>WORLD Radio - Reporting for treatment</p></div>
// 						<div class="podcast-download">
// 							<a download href="https://dts.podtrac.com/redirect.mp3/https://www4.wng.org/Reporting-for-treatment.mp3" class="white">
// 								<span class="fa-stack">
// 								  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 								  <i class="fas fa-cloud-download-alt fa-stack-1x fa-inverse"></i>
// 								</span>
// 							</a>
// 						</div>
// 					</div>
// 					<!-- end of podcast player -->

// 				</div>
// 			</div>
// 						<hr class="mx-3 w-100 podcastDivider">
// 				    				    <podcast-player class="w-100" v-bind:src="https://dts.podtrac.com/redirect.mp3/https://wng.org/podcasts/finding-compassion-in-community-service-1723054873" />
// 			<div class="podcastCard position-relative d-flex flex-row flex-wrap justify-content-start w-100" data-postDate="08-08-2024">
// 								<div class="col-3">
// 					<a href="https://wng.org/podcasts/finding-compassion-in-community-service-1723054873">
// 						<img class="img-fluid" src="https://www4.wng.org/GettyImages-1938614028-TWE.jpg" alt="Getty Images 1938614028 TWE">
// 					</a>
// 				</div>
// 								<div class="col-9">
// 					<a href="https://wng.org/podcasts/finding-compassion-in-community-service-1723054873">
// 					<h5 class="">Finding compassion in community service</h5>
// 					</a>
// 					<p>Volunteering in a soup kitchen inspires Tobin Simpson to love struggling people and start a new career</p>
// 					<!-- Podcast Player -->
// 					<div class="d-flex flex-row justify-content-start podcast-player px-2 py-1" id="podcastDiv-6">
// 						<div class="podcastControls d-flex flex-row justify-content-start align-items-center mh-100" id="podcastController-6">
// 							<span id="podcastLoading-6" class="fa-stack">
// 							  <i class="fas fa-circle fa-stack-2x" style="color:black;"></i>
// 							  <i class="fas fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
// 							</span>
//   `));
//   return response;
// }

// // This function extracts the date from the URL
// function getDateFromUrl(url: string): string | null {
//   const match = url.match(/-\d{4}-\d{2}-\d{2}-/);
//   return match ? match[0].slice(1, -1) : null;
// }

// // This function extracts the body content from the HTML
// function getBodyContent(html: string): string | null {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   const body = doc.querySelector('body');
//   return body?.textContent?.trim() || null;
// }

// async function main() {
//   const today = new Date().toISOString().slice(0, 10); // Format date YYYY-MM-DD

//   try {
//     const sourceHtml = await fetchHtml('https://example.com/source.html'); // Replace with actual source URL

//     const link = sourceHtml.match(/href="https:\/\/wng.org\/podcasts\/.*?-([^"]+)-.*/);
//     const targetDate = link?.[1];

//     if (targetDate && targetDate === today) {
//       const podcastUrl = link[0].slice(6, -1);
//       const podcastHtml = await fetchHtml(podcastUrl);
//       const content = getBodyContent(podcastHtml);

//       if (content) {
//         console.log('Blog post content:', content);
//       } else {
//         console.log('No body content found in the podcast page.');
//       }
//     } else {
//       console.log('No link containing today\'s date found in the source.');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// main();

// scrape();

// // // Function to summarize text using ChatGPT
// // async function summarizeText(text: string): Promise<string> {
// //   try {
// //     const response = await openai.createCompletion({
// //       model: 'text-davinci-003', // You can use other models as well
// //       prompt: `Summarize the following text:\n\n${text}`,
// //       max_tokens: 150, // Adjust based on the desired length of the summary
// //       temperature: 0.5
// //     });
// //     return response.data.choices[0].text.trim();
// //   } catch (error) {
// //     console.error('Error summarizing text:', error);
// //     return 'Error summarizing text';
// //   }
// // }

// // // Main function to fetch and summarize RSS feed items
// // async function main(): Promise<void> {
// //   try {
// //     const items = await fetchRssFeed(rssUrl);

// //     for (const item of items) {
// //       const title = item.title;
// //       const summary = item.contentSnippet || item.content || item.summary || '';
// //       console.log(`Title: ${title}`);
// //       console.log(`Original Summary: ${summary}`);

// //       // Summarize the entry
// //       const summarizedText = await summarizeText(summary);
// //       console.log(`Summarized Text: ${summarizedText}`);
// //       console.log('-'.repeat(80));
// //     }
// //   } catch (error) {
// //     console.error('Error fetching RSS feed:', error);
// //   }
// // }

// // // Run the main function
// // main();
