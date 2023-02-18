# tiktok.com

# List that need to consider :
1. Color pallete
2. Button
3. Typography 
4. Assets
5. Responsive View
6. Menu

## Color pallete  
3-color pallete  
color1: #1618230f  
color2: #161823
color3: #fe2c55
color_link: #161823
color_link_hover: #161823
color_link_active: #161823

## Button  
color_btn_light: #1618230f
color_btn_light_hover: #fe2c550f
color_btn_light_active: #fe2c5529
text_btn_light: #fe2c55

color_btn_dark: #1618230f
color_btn_dark_hover: linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),#FE2C55
color_btn_dark_active: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#FE2C55
text_btn_dark: #1618230f

color_btn_gray: #1618230f
color_btn_gray_hover: #16182308
color_btn_gray_active: #16182308
text_btn_gray: #161823


### Typography
Font: ProximaNova, Arial, sans-serif
text_main: black, normal
text_bold: black, bold
text_hashtag: black, bold
text_userid: black, bold
text_username: black, normal
text_userid: black, bold
text_username: black, normal
text_bold: black, bold
text_subtitle: gray, normal
text_menu: black, bold 
text_menu: black, bold 
text_discover: gray, normal
text_footer: gray, normal 

  
### Assets
1. icon
 - verified
 - music
 - hashtag
 - love
 - comment
 - share
 - scroll_to_top
 - desktop
 - mobile
 - cancel
 - arrow_up
 - arrow_down
 - box_l
 - box_m
 - search
 - video
 - friend
 - home
 - plus
 - three_dot
 - box_a
 - question
 - keyboard
 - darkmode
 
2. photo_profile
3. image
 - tiktok
 - create_effect


### Responsive View
[Desktop]
768 (md) : hide header search
1070 : hide left pane to icon only

[Mobile]
new UI (Completely different)

### Menu 
/
/following
/live


# Summary
1. Breakdown design : 30min
2. Create style : 20min
 - font : https://en.bestfonts.pro/font/proxima-nova (woff)
3. Gather assets : 10min
 - random photo : @faker-js/faker
 - logo : wikipedia
 - icon : heroicicon
 - createeffect : copy svg

4. Create layout : 
 - MainLayout : 20min
 -  
5. Create component : 
 - Header : 6hour
   - Flex Component
   - SearchInput
   - SearchResultOnFocus
   - SearchInputHorizontalResize
   - CancelSearch
   - CreateEffectButton Hover
   - ThreeDotMenu Hover
   - DarkMode Toggle CheckBox
 - Sidebar : 5hour 10min
   - Flex Component
   - See All Toggle
   - Hover SuggestedAccount
   - FollowButton 
   - Discover FlexWrap
   - Discover TextElipsis
   - Local Scroll (fixed container on flex segment)
   - Animation Show Scroll on Hover
 - ForYou : 6hour
   - Fixed Component
   - ScrollToTop (listen component scroll)
   - LoadingSVG on LoadContent
   - GetTikTok/GetApp Close Animation
   - Hover Account
   - Hover Share (Expand)
   - Reverse Icon ActionButton
   - Text Wrap (see more)
   - Video Thumbnail
   - Video Autoplay
   - VideoPlayer Tools and Duration.
   - Modal Content
 - ModalLogin : 6hour

