function redirectToPage(url)
{
    // Constructing the relative path using the current location
    const baseUrl = window.location.href.split('/').slice(0, -1).join('/');

    window.location.href = `${baseUrl}/${url}`;
}

function openLink(url)
{
    window.open(url, '_blank');
}
