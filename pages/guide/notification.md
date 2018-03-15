# Notification

<p class="uk-text-lead">Create toggleable notifications that fade out automatically.</p>

## Usage

The notification will not fade out but remain visible when you hover the message until you stop hovering. You can also close the notification by clicking it. To show notifications simply push them in your array messages data, as simple text or Object. The following code snippet gets you started.

```html
<vk-notification :messages="[{...}]"></vk-notification>
```

```example
---
count: 0
messages: []
---

<vk-notification :messages.sync="messages"></vk-notification>

<vk-button @click="count++, messages.push(`Message ${count}`)">Simple message</vk-button>
```

==Note== By default identical messages displayed at the same time will be ignored. In the demo we are changing the message text but you can as well set a unique `key` to the message `Object` and display messages with the exact same text.

***

## HTML message

You can set custom HTML inside your messages using the default scoped slot.

```html
<vk-notification>
  <div slot-scope="{ message }">
    <vk-icon></vk-icon> {{ message }}
  </div>
</vk-notification>
```

```example
---
messages: []
---

<vk-notification :messages.sync="messages">
  <div slot-scope="{ message }">
    <vk-icon icon="check"></vk-icon> {{ message }}
  </div>
</vk-notification>

<vk-button @click="messages.push('Message')">Click me</vk-button>
```

***

## Position

Add one of the following options to the `position` prop to adjust the notification's position to different corners.

```html
<vk-notification position="top-right">...</vk-notification>
```

| Position | Code |
|:----------------|:---------------------------|
| `top-left`      | `position="top-left"`      |
| `top-center`    | `position="top-center"`    |
| `top-right`     | `position="top-right"`     |
| `bottom-left`   | `position="bottom-left"`   |
| `bottom-center` | `position="bottom-center"` |
| `bottom-right`  | `position="bottom-right"`  |


```example
---
topLeft: []
topCenter: []
topRight: []
bottomLeft: []
bottomCenter: []
bottomRight: []
---

<vk-notification
  position="top-left"
  :messages.sync="topLeft"
></vk-notification>

<vk-notification
  position="top-center"
  :messages.sync="topCenter"
></vk-notification>

<vk-notification
  position="top-right"
  :messages.sync="topRight"
></vk-notification>

<vk-notification
  position="bottom-left"
  :messages.sync="bottomLeft"
></vk-notification>

<vk-notification
  position="bottom-center"
  :messages.sync="bottomCenter"
></vk-notification>

<vk-notification
  position="bottom-right"
  :messages.sync="bottomRight"
></vk-notification>

<p v-vk-margin>
  <vk-button @click="topLeft.push('Top Left...')">Top Left</vk-button>
  <vk-button @click="topCenter.push('Top Center...')">Top Center</vk-button>
  <vk-button @click="topRight.push('Top Right...')">Top Right</vk-button>
  <vk-button @click="bottomLeft.push('Bottom Left...')">Bottom Left</vk-button>
  <vk-button @click="bottomCenter.push('Bottom Center...')">Bottom Center</vk-button>
  <vk-button @click="bottomRight.push('Bottom Right...')">Bottom Right</vk-button>
</p>
```

***

## Style

A notification can be styled by adding a status to the message to indicate a `primary`, `success`, `warning` or `danger` status.

```html
<vk-notification status="primary"></vk-notification>
```

```example
---
messages: []
---

<vk-notification status="primary" :messages.sync="messages"></vk-notification>

<p v-vk-margin>
  <vk-button @click="messages.push('Primary')">Primary</vk-button>
  <vk-button @click="messages.push({ message: 'Success', status: 'success' })">Success</vk-button>
  <vk-button @click="messages.push({ message: 'Warning', status: 'warning' })">Warning</vk-button>
  <vk-button @click="messages.push({ message: 'Danger', status: 'danger' })">Danger</vk-button>
</p>
```

***

## Props

### vk-notification

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `timeout` | Number | `5000` | Time after which the message will be auto-closed. |
| `status` | String | -- | The message status style with `primary`, `success`, `warning` or `danger` as possible options. |
| `position` | String | `top-center` | The position corner where to display the message - `(top bottom)-(left center right)`. |
| `messages` | Array | `[]` | Array of `String` or `Object` representing the message to display. |

### The message Object

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `key` | String | -- | A unique `key` to allow identifying the message over others when they are sharing the same exact text and display options. |
| `timeout` | Number | -- | Overrides the `vk-notification` timeout. |
| `status` | String | -- | Overrides the `vk-notification` status. |
