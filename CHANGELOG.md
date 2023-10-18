# Alurkerja Version 1

## Major Changes

1. Mengganti nama AlurkerjaForm menjadi FormLowcode
2. Menghapus props `tableName`, dan `module`. sekarang harus menggunakan `specPath` pada komponen FormLowcode dan TableLowcode
3. Perubahan cara menghide button, sebelumnya ada props `hideCreate`, `hideBpmn` dsb. namun itu dihilangkan, untuk hide bisa dengan cara `customButtonDiagram` yang mereturn fragment  
4. Menghapus props formConfig di TableLowcode
5. Menghapus props tableConfig di TableLowcode

## Minor Change

1. menambahkan props `column` untuk menentukan column apa saja yang ingin ditampilkan
2. FormLowcodeLite behavior ketika menggunakan INPUT_SELECT yang sebelumnya ngereturn opsi yang berisi label dan value, sekarang langsung ngereturn value nya
