export function Seo(data = {}) {
    data.title = data.title || 'Green Tech Innovation';
    data.metaDescription = data.metaDescription || 'Nous offrons des solutions pour une bonne gestion des exploitations agricoles, familiales, une garantie de la sécurité alimentaire et la durabilité de l\'environnement.'
  
    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription)
}