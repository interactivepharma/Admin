import createComponentCard from '../utils/create-component-card';

// map card names to component names
export const CARD_COMPONENT_MAP = {
    hr: 'koenig-card-hr',
    image: 'koenig-card-image',
    markdown: 'koenig-card-markdown',
    'card-markdown': 'koenig-card-markdown', // backwards-compat with markdown editor
    html: 'koenig-card-html',
    code: 'koenig-card-code',
    embed: 'koenig-card-embed',
    bookmark: 'koenig-card-bookmark',
    gallery: 'koenig-card-gallery',
    email: 'koenig-card-email',
    button: 'koenig-card-button',
    callout: 'koenig-card-callout',
    nft: 'koenig-card-nft',
    toggle: 'koenig-card-accordion',
    'email-cta': 'koenig-card-email-cta',
    paywall: 'koenig-card-paywall'
};

// map card names to generic icons (used for ghost elements when dragging)
export const CARD_ICON_MAP = {
    hr: 'koenig/kg-card-type-divider',
    image: 'koenig/kg-card-type-image',
    markdown: 'koenig/kg-card-type-markdown',
    'card-markdown': 'koenig/kg-card-type-markdown',
    html: 'koenig/kg-card-type-html',
    code: 'koenig/kg-card-type-gen-embed',
    embed: 'koenig/kg-card-type-gen-embed',
    bookmark: 'koenig/kg-card-type-bookmark',
    gallery: 'koenig/kg-card-type-gallery',
    email: 'koenig/kg-card-type-gen-embed',
    button: 'koenig/kg-card-type-gen-embed',
    callout: 'koenig/kg-card-type-gen-embed',
    nft: 'koenig/kg-card-type-gen-embed',
    toggle: 'koenig/kg-card-type-gen-embed',
    'email-cta': 'koenig/kg-card-type-gen-embed',
    paywall: 'koenig/kg-card-type-divider'
};

// TODO: move koenigOptions directly into cards now that card components register
// themselves so that they are available on card.component
export default [
    createComponentCard('card-markdown'), // backwards-compat with markdown editor
    createComponentCard('code'),
    createComponentCard('embed', {hasEditMode: false}),
    createComponentCard('bookmark', {hasEditMode: false}),
    createComponentCard('hr', {hasEditMode: false, selectAfterInsert: false}),
    createComponentCard('html'),
    createComponentCard('image', {hasEditMode: false}),
    createComponentCard('markdown'),
    createComponentCard('gallery', {hasEditMode: false}),
    createComponentCard('email'),
    createComponentCard('email-cta'),
    createComponentCard('button'),
    createComponentCard('callout'),
    createComponentCard('nft', {hasEditMode: false}),
    createComponentCard('toggle'),
    createComponentCard('paywall', {hasEditMode: false, selectAfterInsert: false})
];

export const CARD_MENU = [
    {
        title: 'Primary',
        rowLength: 1,
        items: [{
            label: 'Image',
            icon: 'koenig/kg-card-type-image',
            desc: 'Upload, or embed with /image [url]',
            iconClass: 'kg-card-type-native',
            matches: ['image', 'img'],
            type: 'card',
            replaceArg: 'image',
            params: ['src'],
            payload: {
                triggerBrowse: true
            }
        },
        {
            label: 'Markdown',
            icon: 'koenig/kg-card-type-markdown',
            desc: 'Insert a Markdown editor card',
            iconClass: 'kg-card-type-native',
            matches: ['markdown', 'md'],
            type: 'card',
            replaceArg: 'markdown'
        },
        {
            label: 'HTML',
            icon: 'koenig/kg-card-type-html',
            desc: 'Insert a raw HTML card',
            iconClass: 'kg-card-type-native',
            matches: ['html'],
            type: 'card',
            replaceArg: 'html'
        },
        {
            label: 'Gallery',
            icon: 'koenig/kg-card-type-gallery',
            desc: 'Create an image gallery',
            iconClass: 'kg-card-type-native',
            matches: ['gallery'],
            type: 'card',
            replaceArg: 'gallery'
        },
        {
            label: 'Divider',
            icon: 'koenig/kg-card-type-divider',
            desc: 'Insert a dividing line',
            iconClass: 'kg-card-type-native',
            matches: ['divider', 'horizontal-rule', 'hr'],
            type: 'card',
            replaceArg: 'hr'
        },
        {
            label: 'Bookmark',
            icon: 'koenig/kg-card-type-bookmark',
            desc: 'Embed a link as a visual bookmark',
            matches: ['bookmark'],
            type: 'card',
            replaceArg: 'bookmark',
            params: ['url']
        },
        {
            label: 'Email content',
            icon: 'koenig/kg-card-type-email',
            desc: 'Only visible when delivered by email',
            matches: ['email'],
            type: 'card',
            replaceArg: 'email',
            postType: 'post'
        },
        {
            label: 'Email call to action',
            icon: 'koenig/kg-card-type-email-cta',
            desc: 'Target free or paid members with a CTA',
            matches: ['email', 'cta'],
            type: 'card',
            replaceArg: 'email-cta',
            postType: 'post'
        },
        {
            label: 'Public preview',
            icon: 'koenig/kg-card-type-paywall',
            desc: 'Attract signups with a public intro',
            matches: ['public preview', 'preview', 'paywall'],
            type: 'card',
            replaceArg: 'paywall'
        },
        {
            label: 'Button',
            icon: 'koenig/kg-card-type-paywall',
            desc: 'Clicky thing',
            matches: ['button'],
            type: 'card',
            replaceArg: 'button',
            feature: 'buttonCard'
        },
        {
            label: 'Callout',
            icon: 'koenig/kg-card-type-paywall',
            desc: 'Info boxes that stand out',
            matches: ['callout'],
            type: 'card',
            replaceArg: 'callout',
            feature: 'calloutCard'
        },
        {
            label: 'Toggle',
            icon: 'koenig/kg-card-type-paywall',
            desc: 'Add collapsible content',
            matches: ['toggle'],
            type: 'card',
            replaceArg: 'toggle',
            feature: 'accordionCard'
        }]
    },
    {
        title: 'Embed',
        rowLength: 1,
        items: [{
            label: 'YouTube',
            icon: 'koenig/kg-card-type-youtube',
            desc: '/youtube [video url]',
            matches: ['youtube'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Twitter',
            icon: 'koenig/kg-card-type-twitter',
            desc: '/twitter [tweet url]',
            matches: ['twitter'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Unsplash',
            icon: 'koenig/kg-card-type-unsplash',
            desc: '/unsplash [search-term or url]',
            iconClass: 'kg-card-type-unsplash',
            matches: ['unsplash'],
            type: 'card',
            replaceArg: 'image',
            params: ['searchTerm'],
            payload: {
                imageSelector: 'unsplash'
            }
        },
        {
            label: 'Vimeo',
            icon: 'koenig/kg-card-type-vimeo',
            desc: '/vimeo [video url]',
            matches: ['vimeo'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'CodePen',
            icon: 'koenig/kg-card-type-codepen',
            desc: '/codepen [pen url]',
            iconClass: 'kg-card-type-codepen',
            matches: ['codepen'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'Spotify',
            icon: 'koenig/kg-card-type-spotify',
            desc: '/spotify [track or playlist url]',
            matches: ['spotify'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'SoundCloud',
            icon: 'koenig/kg-card-type-soundcloud',
            desc: '/soundcloud [track or playlist url]',
            matches: ['soundcloud'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        },
        {
            label: 'NFT',
            icon: 'koenig/kg-card-type-other',
            desc: '/nft [opensea url]',
            iconClass: 'kg-card-type-native',
            matches: ['nft', 'opensea'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url'],
            feature: 'nftCard'
        },
        {
            label: 'Other...',
            icon: 'koenig/kg-card-type-other',
            desc: '/embed [url]',
            iconClass: 'kg-card-type-native',
            matches: ['embed'],
            type: 'card',
            replaceArg: 'embed',
            params: ['url']
        }]
    }
];
