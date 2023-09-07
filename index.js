class Animal {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    action () {
        console.log(`says ${this.sound}`);
    }
}


/*
    1. git init
        -> menginisialisasi projek git baru
    2. git add
        -> memindahkan file ke dalam staging area
    3. git commit -m "commit message"
        -> menambahkan berita acara
        -> memindahkan perubahan ke dalam local repository
    4. git status
        -> untuk melihat status perubahan
    5. git remote add 
        -> untuk menambahkan link remote repository
    6. git remote -v
        -> melihat remote yang ada
    7. git push
        -> untuk mengupload dari local repository ke remote repository
    8. git pull
        -> download dari remote repository ke local repository
    9. git branch
        -> untuk melihat daftar branch yang tersedia
*/