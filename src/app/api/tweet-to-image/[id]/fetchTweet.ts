async function fetchTweet(tweetId = "1324125650630766592") {
  const response = await fetch(
    `https://api.x.com/graphql/SAvsJgT-uo2NRaJBVX9-Hg/TweetResultByRestId?variables=%7B%22tweetId%22%3A%22${tweetId}%22%2C%22withCommunity%22%3Afalse%2C%22includePromotedContent%22%3Afalse%2C%22withVoice%22%3Afalse%7D&features=%7B%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22premium_content_api_read_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22responsive_web_grok_analyze_button_fetch_trends_enabled%22%3Afalse%2C%22responsive_web_grok_analyze_post_followups_enabled%22%3Afalse%2C%22responsive_web_jetfuel_frame%22%3Afalse%2C%22responsive_web_grok_share_attachment_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22responsive_web_grok_show_grok_translated_post%22%3Afalse%2C%22responsive_web_grok_analysis_button_from_backend%22%3Afalse%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22payments_enabled%22%3Afalse%2C%22profile_label_improvements_pcf_label_in_post_enabled%22%3Atrue%2C%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_grok_image_annotation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%2C%22withArticlePlainText%22%3Afalse%2C%22withGrokAnalyze%22%3Afalse%2C%22withDisallowedReplyControls%22%3Afalse%7D`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6",
        authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
        "content-type": "application/json",
        priority: "u=1, i",
        "sec-ch-ua":
          '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "x-client-transaction-id":
          "dkxQwMov/Bx3pUmMLTxstBefwjUR1wxzZljbVSWfoLux6MUShPe6V30HK/qwP14hyk8YYnJDevp8NXYZCvR76fgq8hkpdQ",
        "x-guest-token": "1940021590457987522",
        "x-twitter-active-user": "yes",
        "x-twitter-client-language": "ru",
        "x-xp-forwarded-for":
          "840045bcba8038121666d42ef49020488d6300dcb6d7639a9a07e95594c003ed799b0bab1c391da76b0726c43e5a6ff5c2c7f6b3f7cc75d756843b0ddb7d4121d0968710ca160515462a38367e737902d98917d9609c8a3581ee8c83b1021d5b746a8f9b0463de6455db4ff5ae14a3c6372d228fc8bbd139730a7ae13f4ecc4452a214d666bee07dacfdb2d688353723acc16292489f7c92b870940e0ba4580f99468ec4bb9f5c30c66f92e78b815ccb09e6a4575443f81d70c24601948a27550adbfd7281a3374921ade9be7a0ad603a32eab2c7553d03704f438fec71ab70d3c03eb07d9303cb6d8f907ee8c8938b1de322d323d2f5651ef8a58e13ce225c21f",
        cookie:
          "guest_id=v1%3A174792434523738293; d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; __cf_bm=yml.QUSPeljb2eG3_rDvEJj5T4RmqgFPu6Jh3sfaoeo-1751372165-1.0.1.1-Hlr.W8jgABem1RCf2QLBRpXPCJwe0rtimZujvbH58GO5rU61Z07b9TjSQOKGtb1jWA3cEDkOkvlrQi._WwkZ.7FPQk.IyIfZplrOm4yIgls; gt=1940021590457987522",
        Referer: "https://x.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  );
  const data = await response.json();
  const parsedData = data.data.tweetResult.result;
  const tweetText = parsedData.full_text || parsedData.legacy.full_text;
  const tweetAuthor = parsedData.core.user_results.result.core.name;
  const tweetAuthorNickname =
    parsedData.core.user_results.result.core.screen_name;
  const tweetAuthorAvatar =
    parsedData.core.user_results.result.avatar.image_url.replace("_normal", "");

  return {
    text: tweetText,
    author: tweetAuthor,
    authorAvatar: tweetAuthorAvatar,
    authorNickname: tweetAuthorNickname,
  }
}

export default fetchTweet;