# Alurkerja Version 1

## Major Changes

1. Mengganti nama AlurkerjaForm menjadi FormLowcode
2. Menghapus props `tableName`, dan `module`. gunakan `specPath` pada komponen FormLowcode dan TableLowcode
3. Perubahan cara menghide button, sebelumnya ada props `hideCreate`, `hideBpmn` dsb. namun itu dihilangkan, untuk hide bisa dengan cara `customButtonDiagram` yang meretrun fragment  
4. Menghapus props formConfig di TableLowcode

## Minor Change
