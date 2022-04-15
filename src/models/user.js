class User {
    constructor(id, name, password, age, address, role, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.age = age;
        this.address = address;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default User;