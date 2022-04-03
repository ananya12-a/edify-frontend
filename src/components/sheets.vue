<template>
    <div>
        <h1 class="white--text">{{sheetName}}</h1>
        <div
        v-for="row in rows"
        :key="row.data" 
        >
            <youtube :video-id="row.data" v-if="row.ifLink=='TRUE'"></youtube>
            <span v-else v-html="row.data"></span>
        </div>
    </div>
    <!--<v-simple-table>
        <template v-slot:default>
        <tbody>
            <tr
            v-for="row in rows"
            :key="row.link"
            >
            <td><youtube :video-id="row.link"></youtube></td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>-->
</template>

<script>
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('@/components/edify-345610-1d5e47062229.json'); 
	export default {
		name: "Sheet",
		props: {
            sheetName: String,
        },
		data() {
			return {
				rows: [],
				loading: true,
			}
		},
		methods:{
			async accessSpreadSheet() {
				const doc = new GoogleSpreadsheet('11Vl0CGbM1GbUh3HqMTYkkOaghRplYtKqxqks-xtj4V0');
				await doc.useServiceAccountAuth(creds);
				await doc.loadInfo(); 
				/*const sheet = doc.sheetsByIndex[0];
				const  rows = await sheet.getRows()
                this.rows = rows;
                console.log(rows.length);
                console.log(rows[0].order); // 'Larry Page'
                console.log(rows[0].link); // 'larry@google.com'*/
                await doc.loadInfo(); // loads document properties and worksheets
                console.log(doc.title);
                const sheet = doc.sheetsByTitle[this.sheetName];
                console.log(sheet.title);
                console.log(sheet.rowCount);

                // read rows
                const rows = await sheet.getRows(); // can pass in { limit, offset }
                const dataRow = []

                rows.map(row =>
                dataRow.push({
                    ifLink: row._rawData[0],
                    data: row._rawData[1],
                })
                )
                console.log(dataRow[0].ifLink=='TRUE')
                this.rows = dataRow
                // read/write row values
                console.log(dataRow[0].data); // 'Larry Page'
			}
		},
		created() {
			this.accessSpreadSheet();
		}
		
	}
</script>

<style scoped>

</style>