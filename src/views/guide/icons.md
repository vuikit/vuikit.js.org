# Icons

<p class="uk-text-lead">Use icons with love, and moderation.</p>

If you followed the [integration guide](integration), icons will be globally registered with a `vk-icons` prefix, eg. `vk-icons-check`, and we recommend to follow that convention for cross component compatibility. That way they will not conflict with other components plus will become easily recognizable.

***

## Usage

As long as the icons are registered with the `vk-icons` prefix you can reference them by the name across the different components supporting them.

```html
<vk-icons-check attrs>...</vk-icons-check>
```

You don't have to register all the icons, on the contrary it would be best to cherry pick the ones you need.

```js
import Vue from 'vue'
import { IconCheck, IconClose } from '@vuikit/icons'

// register globally
Vue.component('VkIconsCheck', IconCheck)
Vue.component('VkIconsClose', IconClose)

// or locally
export default {
  components: {
    VkIconsCheck: IconCheck,
    VkIconsClose: IconClose
  }
} 
```

==Note== Check the [Icon component](icon) to render the icons with inherit styles and other benefits.

***

## Custom Icons

If you want to register your own collection of icons make sure those are functional components, returning a raw `svg` element and registered globally or locally as described above. That's important as the components supporting icons would expect that.

You can convert the svg files to Vue functional components on your own way, but you can also use the [Vuikit Icons build](https://github.com/vuikit/vuikit/tree/next/packages/vuikit-icons#custom-icons) process which will make the conversion for you.

Additionally, if using Webpack the [Vuikit Icons loader](https://github.com/vuikit/vuikit-icons-loader) will do the conversion on the fly. Pretty neat!

***

## Library

Here is an overview of all currently available icons.

<h4 class="uk-heading-line"><span>App</span></h4>

<div>
  <vk-grid class="uk-child-width-1-3@s">
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="home"></vk-icon> home</li>
        <li><vk-icon class="uk-margin-small-right" icon="sign-in"></vk-icon> sign-in</li>
        <li><vk-icon class="uk-margin-small-right" icon="sign-out"></vk-icon> sign-out</li>
        <li><vk-icon class="uk-margin-small-right" icon="user"></vk-icon> user</li>
        <li><vk-icon class="uk-margin-small-right" icon="users"></vk-icon> users</li>
        <li><vk-icon class="uk-margin-small-right" icon="lock"></vk-icon> lock</li>
        <li><vk-icon class="uk-margin-small-right" icon="unlock"></vk-icon> unlock</li>
        <li><vk-icon class="uk-margin-small-right" icon="settings"></vk-icon> settings</li>
        <li><vk-icon class="uk-margin-small-right" icon="cog"></vk-icon> cog</li>
        <li><vk-icon class="uk-margin-small-right" icon="nut"></vk-icon> nut</li>
        <li><vk-icon class="uk-margin-small-right" icon="comment"></vk-icon> comment</li>
        <li><vk-icon class="uk-margin-small-right" icon="commenting"></vk-icon> commenting</li>
        <li><vk-icon class="uk-margin-small-right" icon="comments"></vk-icon> comments</li>
        <li><vk-icon class="uk-margin-small-right" icon="hashtag"></vk-icon> hashtag</li>
        <li><vk-icon class="uk-margin-small-right" icon="tag"></vk-icon> tag</li>
        <li><vk-icon class="uk-margin-small-right" icon="cart"></vk-icon> cart</li>
        <li><vk-icon class="uk-margin-small-right" icon="credit-card"></vk-icon> credit-card</li>
        <li><vk-icon class="uk-margin-small-right" icon="mail"></vk-icon> mail</li>
        <li><vk-icon class="uk-margin-small-right" icon="receiver"></vk-icon> receiver</li>
        <li><vk-icon class="uk-margin-small-right" icon="search"></vk-icon> search</li>
        <li><vk-icon class="uk-margin-small-right" icon="location"></vk-icon> location</li>
        <li><vk-icon class="uk-margin-small-right" icon="bookmark"></vk-icon> bookmark</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="code"></vk-icon> code</li>
        <li><vk-icon class="uk-margin-small-right" icon="paint-bucket"></vk-icon> paint-bucket</li>
        <li><vk-icon class="uk-margin-small-right" icon="camera"></vk-icon> camera</li>
        <li><vk-icon class="uk-margin-small-right" icon="bell"></vk-icon> bell</li>
        <li><vk-icon class="uk-margin-small-right" icon="bolt"></vk-icon> bolt</li>
        <li><vk-icon class="uk-margin-small-right" icon="star"></vk-icon> star</li>
        <li><vk-icon class="uk-margin-small-right" icon="heart"></vk-icon> heart</li>
        <li><vk-icon class="uk-margin-small-right" icon="happy"></vk-icon> happy</li>
        <li><vk-icon class="uk-margin-small-right" icon="lifesaver"></vk-icon> lifesaver</li>
        <li><vk-icon class="uk-margin-small-right" icon="rss"></vk-icon> rss</li>
        <li><vk-icon class="uk-margin-small-right" icon="social"></vk-icon> social</li>
        <li><vk-icon class="uk-margin-small-right" icon="git-branch"></vk-icon> git-branch</li>
        <li><vk-icon class="uk-margin-small-right" icon="git-fork"></vk-icon> git-fork</li>
        <li><vk-icon class="uk-margin-small-right" icon="world"></vk-icon> world</li>
        <li><vk-icon class="uk-margin-small-right" icon="calendar"></vk-icon> calendar</li>
        <li><vk-icon class="uk-margin-small-right" icon="clock"></vk-icon> clock</li>
        <li><vk-icon class="uk-margin-small-right" icon="history"></vk-icon> history</li>
        <li><vk-icon class="uk-margin-small-right" icon="future"></vk-icon> future</li>
        <li><vk-icon class="uk-margin-small-right" icon="pencil"></vk-icon> pencil</li>
        <li><vk-icon class="uk-margin-small-right" icon="trash"></vk-icon> trash</li>
        <li><vk-icon class="uk-margin-small-right" icon="move"></vk-icon> move</li>
        <li><vk-icon class="uk-margin-small-right" icon="link"></vk-icon> link</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="question"></vk-icon> question</li>
        <li><vk-icon class="uk-margin-small-right" icon="info"></vk-icon> info</li>
        <li><vk-icon class="uk-margin-small-right" icon="warning"></vk-icon> warning</li>
        <li><vk-icon class="uk-margin-small-right" icon="image"></vk-icon> image</li>
        <li><vk-icon class="uk-margin-small-right" icon="thumbnails"></vk-icon> thumbnails</li>
        <li><vk-icon class="uk-margin-small-right" icon="table"></vk-icon> table</li>
        <li><vk-icon class="uk-margin-small-right" icon="list"></vk-icon> list</li>
        <li><vk-icon class="uk-margin-small-right" icon="menu"></vk-icon> menu</li>
        <li><vk-icon class="uk-margin-small-right" icon="grid"></vk-icon> grid</li>
        <li><vk-icon class="uk-margin-small-right" icon="more"></vk-icon> more</li>
        <li><vk-icon class="uk-margin-small-right" icon="more-vertical"></vk-icon> more-vertical</li>
        <li><vk-icon class="uk-margin-small-right" icon="plus"></vk-icon> plus</li>
        <li><vk-icon class="uk-margin-small-right" icon="plus-circle"></vk-icon> plus-circle</li>
        <li><vk-icon class="uk-margin-small-right" icon="minus"></vk-icon> minus</li>
        <li><vk-icon class="uk-margin-small-right" icon="minus-circle"></vk-icon> minus-circle</li>
        <li><vk-icon class="uk-margin-small-right" icon="close"></vk-icon> close</li>
        <li><vk-icon class="uk-margin-small-right" icon="check"></vk-icon> check</li>
        <li><vk-icon class="uk-margin-small-right" icon="ban"></vk-icon> ban</li>
        <li><vk-icon class="uk-margin-small-right" icon="refresh"></vk-icon> refresh</li>
        <li><vk-icon class="uk-margin-small-right" icon="play"></vk-icon> play</li>
        <li><vk-icon class="uk-margin-small-right" icon="play-circle"></vk-icon> play-circle</li>
      </ul>

    </div>
  </vk-grid>
</div>

<h4 class="uk-heading-line"><span>Devices</span></h4>

<div>

  <vk-grid class="uk-child-width-1-3@s">
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="tv"></vk-icon> tv</li>
        <li><vk-icon class="uk-margin-small-right" icon="desktop"></vk-icon> desktop</li>
        <li><vk-icon class="uk-margin-small-right" icon="laptop"></vk-icon> laptop</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="tablet"></vk-icon> tablet</li>
        <li><vk-icon class="uk-margin-small-right" icon="phone"></vk-icon> phone</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="tablet-landscape"></vk-icon> tablet-landscape</li>
        <li><vk-icon class="uk-margin-small-right" icon="phone-landscape"></vk-icon> phone-landscape</li>
      </ul>

    </div>
  </vk-grid>
</div>

<h4 class="uk-heading-line"><span>Storage</span></h4>

<div>
  <vk-grid class="uk-child-width-1-3@s">
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="file"></vk-icon> file</li>
        <li><vk-icon class="uk-margin-small-right" icon="copy"></vk-icon> copy</li>
        <li><vk-icon class="uk-margin-small-right" icon="file-edit"></vk-icon> file-edit</li>
        <li><vk-icon class="uk-margin-small-right" icon="folder"></vk-icon> folder</li>
        <li><vk-icon class="uk-margin-small-right" icon="album"></vk-icon> album</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="push"></vk-icon> push</li>
        <li><vk-icon class="uk-margin-small-right" icon="pull"></vk-icon> pull</li>
        <li><vk-icon class="uk-margin-small-right" icon="server"></vk-icon> server</li>
        <li><vk-icon class="uk-margin-small-right" icon="database"></vk-icon> database</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="cloud-upload"></vk-icon> cloud-upload</li>
        <li><vk-icon class="uk-margin-small-right" icon="cloud-download"></vk-icon> cloud-download</li>
        <li><vk-icon class="uk-margin-small-right" icon="download"></vk-icon> download</li>
        <li><vk-icon class="uk-margin-small-right" icon="upload"></vk-icon> upload</li>
      </ul>

    </div>
  </vk-grid>
</div>

<h4 class="uk-heading-line"><span>Direction</span></h4>

<div>
  <vk-grid class="uk-child-width-1-3@s">
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="reply"></vk-icon> reply</li>
        <li><vk-icon class="uk-margin-small-right" icon="forward"></vk-icon> forward</li>
        <li><vk-icon class="uk-margin-small-right" icon="expand"></vk-icon> expand</li>
        <li><vk-icon class="uk-margin-small-right" icon="shrink"></vk-icon> shrink</li>
        <li><vk-icon class="uk-margin-small-right" icon="arrow-up"></vk-icon> arrow-up</li>
        <li><vk-icon class="uk-margin-small-right" icon="arrow-down"></vk-icon> arrow-down</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="arrow-left"></vk-icon> arrow-left</li>
        <li><vk-icon class="uk-margin-small-right" icon="arrow-right"></vk-icon> arrow-right</li>
        <li><vk-icon class="uk-margin-small-right" icon="chevron-up"></vk-icon> chevron-up</li>
        <li><vk-icon class="uk-margin-small-right" icon="chevron-down"></vk-icon> chevron-down</li>
        <li><vk-icon class="uk-margin-small-right" icon="chevron-left"></vk-icon> chevron-left</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="chevron-right"></vk-icon> chevron-right</li>
        <li><vk-icon class="uk-margin-small-right" icon="triangle-up"></vk-icon> triangle-up</li>
        <li><vk-icon class="uk-margin-small-right" icon="triangle-down"></vk-icon> triangle-down</li>
        <li><vk-icon class="uk-margin-small-right" icon="triangle-left"></vk-icon> triangle-left</li>
        <li><vk-icon class="uk-margin-small-right" icon="triangle-right"></vk-icon> triangle-right</li>
      </ul>

    </div>
    </vk-grid>
</div>

<h4 class="uk-heading-line"><span>Editor</span></h4>

<div>
  <vk-grid class="uk-child-width-1-3@s">
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="bold"></vk-icon> bold</li>
        <li><vk-icon class="uk-margin-small-right" icon="italic"></vk-icon> italic</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="strikethrough"></vk-icon> strikethrough</li>
        <li><vk-icon class="uk-margin-small-right" icon="video-camera"></vk-icon> video-camera</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="quote-right"></vk-icon> quote-right</li>
      </ul>

    </div>
  </vk-grid>
</div>

<h4 class="uk-heading-line"><span>Brands</span></h4>

<div>
  <vk-grid class="uk-child-width-1-3@s">
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="500px"></vk-icon> 500px</li>
        <li><vk-icon class="uk-margin-small-right" icon="behance"></vk-icon> behance</li>
        <li><vk-icon class="uk-margin-small-right" icon="dribbble"></vk-icon> dribbble</li>
        <li><vk-icon class="uk-margin-small-right" icon="facebook"></vk-icon> facebook</li>
        <li><vk-icon class="uk-margin-small-right" icon="flickr"></vk-icon> flickr</li>
        <li><vk-icon class="uk-margin-small-right" icon="foursquare"></vk-icon> foursquare</li>
        <li><vk-icon class="uk-margin-small-right" icon="github"></vk-icon> github</li>
        <li><vk-icon class="uk-margin-small-right" icon="github-alt"></vk-icon> github-alt</li>
        <li><vk-icon class="uk-margin-small-right" icon="gitter"></vk-icon> gitter</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="google"></vk-icon> google</li>
        <li><vk-icon class="uk-margin-small-right" icon="google-plus"></vk-icon> google-plus</li>
        <li><vk-icon class="uk-margin-small-right" icon="instagram"></vk-icon> instagram</li>
        <li><vk-icon class="uk-margin-small-right" icon="joomla"></vk-icon> joomla</li>
        <li><vk-icon class="uk-margin-small-right" icon="linkedin"></vk-icon> linkedin</li>
        <li><vk-icon class="uk-margin-small-right" icon="pagekit"></vk-icon> pagekit</li>
        <li><vk-icon class="uk-margin-small-right" icon="pinterest"></vk-icon> pinterest</li>
        <li><vk-icon class="uk-margin-small-right" icon="soundcloud"></vk-icon> soundcloud</li>
        <li><vk-icon class="uk-margin-small-right" icon="tripadvisor"></vk-icon> tripadvisor</li>
      </ul>

    </div>
    <div>

      <ul class="uk-list">
        <li><vk-icon class="uk-margin-small-right" icon="tumblr"></vk-icon> tumblr</li>
        <li><vk-icon class="uk-margin-small-right" icon="twitter"></vk-icon> twitter</li>
        <li><vk-icon class="uk-margin-small-right" icon="uikit"></vk-icon> uikit</li>
        <li><vk-icon class="uk-margin-small-right" icon="vimeo"></vk-icon> vimeo</li>
        <li><vk-icon class="uk-margin-small-right" icon="whatsapp"></vk-icon> whatsapp</li>
        <li><vk-icon class="uk-margin-small-right" icon="wordpress"></vk-icon> wordpress</li>
        <li><vk-icon class="uk-margin-small-right" icon="xing"></vk-icon> xing</li>
        <li><vk-icon class="uk-margin-small-right" icon="yelp"></vk-icon> yelp</li>
        <li><vk-icon class="uk-margin-small-right" icon="youtube"></vk-icon> youtube</li>
      </ul>

    </div>
  </vk-grid>
</div>
