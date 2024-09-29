function cobainExternal(){
    // 
    // prompt("coba deh akan muncul di layar")
    // Data Awal
    var name = "Kevin"

    console.log('Var ->', name)

    // Perbarui
    name = "Wati"

    // LOCK DATA INI
    // Bertipe Immutable
    // Data yang tidak bisa dirubah menggunakan constanct
    {
        const stringName = "qwertyuiopasdfghjkl" // bisa pake petik 1 '' atau petik ""
        const angka = 12345678;
        const boolean = true // TRUE or FALSE nilai 1 dan 0
        const nullled = null

        // console.log('Panggil di dalam block =>, angka)
    }


    // Mutable Variabel menggunakan let
    {
        let stringLet = "Jakarta"
        stringLet = "Bekasi"

        console.log('Panggil di dalam block =>' , stringLet)
    }
    console.log('Panggil di luar block =>', stringLet)
}