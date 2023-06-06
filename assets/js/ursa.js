let copyBibTex = (e) => {
    let bibtex = e.getAttribute('bibtex');
    console.log(bibtex)
    window.navigator.clipboard.writeText(bibtex).then(() => {
        alert('BibTeX Copied to Your Clipboard 🎉')
    })
}

let viewByDoi = (e) => {
    let doi = e.getAttribute('doi');
    console.log(doi)
    window.open(doi, '_blank');
}