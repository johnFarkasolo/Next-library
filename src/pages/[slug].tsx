export async function getStaticPaths() {
    // const characters = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500').then(res => res.json());

    return {
        // paths: characters.map(character => {
        //     const characterId = character.name.toLowerCase().replace(/ /g, '-');
        //     return {
        //         params: {
        //             characterId
        //         }
        //     }
        // }),
        fallback: false
    }
}
//translate for dynamic pages
// export async function getStaticPaths({ locales }) {
//     const paths = []
//
//     locales.forEach((locale, i) => {
//         posts.forEach((post, i) => {
//             paths.push({ params: { slug: post.id }, locale })
//         });
//     });
//
//     return { paths, fallback: false }
// }