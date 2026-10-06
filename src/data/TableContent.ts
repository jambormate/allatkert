import type { TableFormat } from "../types/TableFormat";

export const TableContent: TableFormat = {
    title: "Az állatkert néhány lakója",
    table_head: [
        "Név",
        "Életkor",
        "Súly",
        "Veszélyeztetett?",
        "Kedvenc ételek"
    ],
    table_body: [
        ["Szimba", "8 év", "190 kg", "Igen", "Marhahús, csirkehús"],
        ["Lili", "12 év", "3200 kg", "Nem", "Fű, levelek, gyümölcsök"],
        ["Beni", "6 év", "850 kg", "Igen", "Levelek, ágak"],
        ["Pötyi", "5 év", "95 kg", "Igen", "Bambusz, sárgarépa"],
        ["Csőrike", "4 év", "28 kg", "Nem", "Hal, krill"]
    ]
};