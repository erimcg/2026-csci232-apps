const data = [
    {
        category: "Food",
        title: "Food article 1",
        text: " This is the text for the first food article."
    },
    {
        category: "Food",
        title: "Food article 2",
        text: " This is the text for the second food article."
    },
    {
        category: "Sports",
        title: "Sports Article 1",
        text: " This is the text for the first sports article."
    },
    {
        category: "Sports",
        title: "Sports Article 2",
        text: " This is the text for the second sports article."
    },
    {
        category: "Sports",
        title: "Sports Article 3",
        text: " This is the text for the third sports article."
    }
]

function getCategories() {
    return [...new Set(data.map(item => item.category))]
}

function getArticles(category) {
    return data.filter((elm) => elm.category == category)
}

export { getCategories, getArticles } 