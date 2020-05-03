const menuGroupArray = [
    {
        name: 'Layout',
        linkArray: [
            { url: 'layout-flexbox-fluid', title: 'Flexbox Fluid' },
            { url: 'layout-flexbox-fixed', title: 'Flexbox Fixed' },
            { url: 'layout-float', title: 'Float' }
        ]
    },
    {
        name: 'Background',
        linkArray: [
            { url: 'background-color', title: 'Background Color' }, 
            { url: 'background-gradient', title: 'Background Gradient' },
            { url: 'background-image', title: 'Background Image' }
        ]
    },
    {
        name: 'Border',
        linkArray: [
            { url: 'border', title: 'Border' }, 
            { url: 'border-radius', title: 'Border Radius' }, 
            { url: 'box-shadow', title: 'Box Shadow' }
        ]
    },
    {
        name: 'Transform',
        linkArray: [
            { url: 'transform-translate', title: 'Translate' }, 
            { url: 'transform-rotate', title: 'Rotate' },
            { url: 'transform-scale', title: 'Scale' }, 
            { url: 'transform-skew', title: 'Skew' }
        ]
    },
    {
        name: 'Filter',
        linkArray: [
            { url: 'filter-blur', title: 'Blur' }, 
            { url: 'filter-brightness', title: 'Brightness' },
            { url: 'filter-contrast', title: 'Contrast' }, 
            { url: 'filter-grayscale', title: 'Grayscale' },
            { url: 'filter-hue-rotate', title: 'Hue-Rotate' }, 
            { url: 'filter-invert', title: 'invert' },
            { url: 'filter-saturate', title: 'Saturate' }, 
            { url: 'filter-sepia', title: 'Sepia' }
        ]
    },
    {
        name: 'Text',
        linkArray: [
            { url: 'text', title: 'Text' }, 
            { url: 'text-shadow', title: 'Text Shadow' }
        ]
    }
];

const layoutItemSizeArray = [
    {
         key: 'one-second', title: '1/2 (50%)', 
         value: 50, nthClear: '2n + 1' 
    },
    {
         key: 'one-third', title: '1/3 (33.33%)', 
         value: 33.33, nthClear: '3n + 1' 
    },
    {
         key: 'one-fourth', title: '1/4 (25%)', 
         value: 25, nthClear: '4n + 1' 
    },
];

const layoutPreviewArray = ['equal-height', 'unequal-height'];

export { menuGroupArray, layoutItemSizeArray, layoutPreviewArray };