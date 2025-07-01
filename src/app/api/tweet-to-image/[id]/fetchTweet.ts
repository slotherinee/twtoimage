async function getFreshHeaders(tweetUrl: string) {
  try {
    const response = await fetch(tweetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
      }
    });
    
    const html = await response.text();
    
    const guestTokenMatch = html.match(/gt=(\d+)/);
    const guestIdMatch = response.headers.get('set-cookie')?.match(/guest_id=([^;]+)/);
    const cfBmMatch = response.headers.get('set-cookie')?.match(/__cf_bm=([^;]+)/);
    
    return {
      guestToken: guestTokenMatch ? guestTokenMatch[1] : null,
      guestId: guestIdMatch ? guestIdMatch[1] : null,
      cfBm: cfBmMatch ? cfBmMatch[1] : null
    };
  } catch {
    return null;
  }
}

async function fetchTweet(tweetId = "1324125650630766592") {
  let response = await fetch(`https://api.x.com/graphql/SAvsJgT-uo2NRaJBVX9-Hg/TweetResultByRestId?variables=%7B%22tweetId%22%3A%22${tweetId}%22%2C%22withCommunity%22%3Afalse%2C%22includePromotedContent%22%3Afalse%2C%22withVoice%22%3Afalse%7D&features=%7B%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22premium_content_api_read_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22responsive_web_grok_analyze_button_fetch_trends_enabled%22%3Afalse%2C%22responsive_web_grok_analyze_post_followups_enabled%22%3Afalse%2C%22responsive_web_jetfuel_frame%22%3Afalse%2C%22responsive_web_grok_share_attachment_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22responsive_web_grok_show_grok_translated_post%22%3Afalse%2C%22responsive_web_grok_analysis_button_from_backend%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22payments_enabled%22%3Afalse%2C%22profile_label_improvements_pcf_label_in_post_enabled%22%3Atrue%2C%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_grok_image_annotation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%2C%22withArticlePlainText%22%3Afalse%2C%22withGrokAnalyze%22%3Afalse%2C%22withDisallowedReplyControls%22%3Afalse%7D`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6",
      "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
      "content-type": "application/json",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "x-client-transaction-id": "nrjfqeiiBvyY8q0mOgqvmQ/I0FZpR6FbP1Pq8xucCnMGyfMabweyAEq7tQuzLeYX+gQ3ipoMatPdKTU8NUM9x4hIIeySnQ",
      "x-guest-token": "1940085457620029814",
      "x-twitter-active-user": "yes",
      "x-twitter-client-language": "ru",
      "x-xp-forwarded-for": "21c88ff601d457b0b246f0b549ecba88d0e450c35d8c6bf26c07b286e7d7e65414dabff26c600162f973d60d4fd49e56c91f9386eb53deb889929a013ff0eca1c8c53753d86cae49e7d0b16e9e44c6fc57774c676a88dd53b913b8b911a4172a256dc931eaf3c66f42575bf18cc7fa188ebbf3fea8cc0d40075dccf117f62e50b7ae9d797e812fd2e7a4eb213059ec2b8ca72c8c12f49a6697581a51949b14fa8abb0c69fe8c80f8c6cb32db9fb93d828cffbbe508a8dd83795efcdc5435c09fcc508683bd2623aace0a4a0750b347ce194e303b24efde600dcdd347024a026d434711ceb13f281509c8f052c436c899d32f3e647c854d1dcf540c0bdb38929ae1",
      "cookie": "guest_id=v1%3A174792434523738293; d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; __cf_bm=wbP3rjLQpBV9.6KmKo3aI5knMibtu35l5B7OBc0G5dQ-1751387392-1.0.1.1-_.sZIduy3UhmdEG_hyw6Tl_jxnuo880hcfvO1.0nJZ61XzgKjeNnmW32PXJqsioQ7WytHxPomIkINzzj.nYg7AgALjIu_I5mYVZG8jvC19Q; gt=1940085457620029814",
      "Referer": "https://x.com/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  });

  if (!response.ok) {
    const freshHeaders = await getFreshHeaders(`https://x.com/rihanna/status/${tweetId}`);
    
    if (freshHeaders && freshHeaders.guestToken) {
      const cookieParts = [];
      if (freshHeaders.guestId) cookieParts.push(`guest_id=${freshHeaders.guestId}`);
      if (freshHeaders.guestToken) cookieParts.push(`gt=${freshHeaders.guestToken}`);
      if (freshHeaders.cfBm) cookieParts.push(`__cf_bm=${freshHeaders.cfBm}`);
      cookieParts.push('d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw');
      
      const updatedHeaders: Record<string, string> = {
        "accept": "*/*",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6",
        "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Google Chrome\";v=\"137\", \"Chromium\";v=\"137\", \"Not/A)Brand\";v=\"24\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-guest-token": freshHeaders.guestToken,
        "x-twitter-active-user": "yes",
        "x-twitter-client-language": "ru",
        "Referer": "https://x.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "cookie": cookieParts.join('; ')
      };

      const randomId = Array.from(crypto.getRandomValues(new Uint8Array(32)), b => b.toString(16).padStart(2, '0')).join('');
      updatedHeaders["x-client-transaction-id"] = randomId;
      
      response = await fetch(`https://api.x.com/graphql/SAvsJgT-uo2NRaJBVX9-Hg/TweetResultByRestId?variables=%7B%22tweetId%22%3A%22${tweetId}%22%2C%22withCommunity%22%3Afalse%2C%22includePromotedContent%22%3Afalse%2C%22withVoice%22%3Afalse%7D&features=%7B%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22premium_content_api_read_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22responsive_web_grok_analyze_button_fetch_trends_enabled%22%3Afalse%2C%22responsive_web_grok_analyze_post_followups_enabled%22%3Afalse%2C%22responsive_web_jetfuel_frame%22%3Afalse%2C%22responsive_web_grok_share_attachment_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22responsive_web_grok_show_grok_translated_post%22%3Afalse%2C%22responsive_web_grok_analysis_button_from_backend%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22payments_enabled%22%3Afalse%2C%22profile_label_improvements_pcf_label_in_post_enabled%22%3Atrue%2C%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_grok_image_annotation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%2C%22withArticlePlainText%22%3Afalse%2C%22withGrokAnalyze%22%3Afalse%2C%22withDisallowedReplyControls%22%3Afalse%7D`, {
        headers: updatedHeaders,
        body: null,
        method: "GET"
      });
    }
  }
  
  if (!response.ok) {
    throw new Error(`Failed to fetch tweet: ${response.status}`);
  }

  const data = await response.json();
  const parsedData = data.data.tweetResult.result;
  const tweetText = parsedData.full_text || parsedData.legacy?.full_text;
  const tweetAuthor = parsedData.core?.user_results?.result?.core?.name || parsedData.core?.user_results?.result?.legacy?.name;
  const tweetAuthorNickname = parsedData.core?.user_results?.result?.core?.screen_name || parsedData.core?.user_results?.result?.legacy?.screen_name;
  const tweetAuthorAvatar = parsedData.core?.user_results?.result?.avatar?.image_url?.replace("_normal", "") || 
                           parsedData.core?.user_results?.result?.legacy?.profile_image_url_https?.replace("_normal", "");

  return {
    text: tweetText,
    author: tweetAuthor,
    authorAvatar: tweetAuthorAvatar,
    authorNickname: tweetAuthorNickname,
  }
}

export default fetchTweet;