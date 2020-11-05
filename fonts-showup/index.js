const createParagraph = font => {
    const p = document.createElement('p')
    p.innerHTML =
        'Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. Velit unde rerum doloremque voluptatibus debitis accusantium <i>eserunt sit deleniti libero iure</i> id alias eveniet repudiandae adipisci quas ea sapiente delectus quae perspiciatis et amet, totam ad consectetur eius? Inventore dolores assumenda iusto voluptas. Expedita quisquam rem laboriosam aperiam dolor blanditiis, ad adipisci culpa fugiat, laudantium illum necessitatibus voluptate? Aliquam voluptas obcaecati doloremque alias voluptatum, fuga eos recusandae odio, facere rem nulla dolorum quis! Voluptatem doloribus delectus illum, dolores unde aliquid commodi eum. Molestiae accusantium ullam ad mollitia assumenda? Mollitia praesentium officiis sequi commodi! Praesentium quisquam, id ad harum reprehenderit doloribus voluptatibus.'
    p.style.fontFamily = font
    return p
}
const createHeading = (font, type) => {
    const heading = document.createElement(`h${type}`)
    heading.innerText = `Heading ${type} `
    heading.style.fontFamily = font
    const span = document.createElement('span')
    span.innerHTML = `#${font}`
    heading.append( type == 1 ? span : '' )
    return heading
}

const createFontBlock = font => {
    const block = document.createElement('div')
    const headings = [1, 2, 3, 4, 5, 6]
    headings.forEach(type => {
        block.append(createHeading(font, type))
    })
    block.append(createParagraph(font))
    return block
}

const fonts = [
    {
        family: 'PT Sans',
        style: 'sans-serif',
    },
    {
        family: 'Comfortaa',
        style: 'sans-serif'
    },
    {
        family: 'Syne',
        style: 'sans-serif',
    },
    {
        family: 'Inter',
        style: 'sans-serif'
    },
    {
        family: 'Forum',
        style: 'serif'
    },
    {
        family: 'Piazzolla',
        style: 'serif',
    },
    {
        family: 'Spectral',
        style: 'serif',
    },
    {
        family: 'Gabriela',
        style: 'serif'
    },
    {
        family: 'Prata',
        style: 'serif'
    },
    {
        family: 'PT Serif',
        style: 'serif'
    },
    {
        family: 'Tinos',
        style: 'serif'
    },
    {
        family: 'Fira Code',
        style: 'monospace'
    },
    {
        family: 'Source Code Pro',
        style: 'monospace'
    },
]

fonts.forEach(font => {
    document
        .getElementsByClassName('wrapper')[0]
        .append(createFontBlock(`${font.family}, ${font.style}`))
})
