class Post {
    constructor(id, title, description, image, createdAt, updatedAt, categoryId) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.categoryId = categoryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default Post;