<template>
    <td v-if="!dataItem.inEdit">{{ dataItem.Date }}</td>
    <td v-else>
        <DatePicker
            :format="'yyyy/MM/dd'"
            :default-value="dateValue" 
            @change="change"
        ></DatePicker>
    </td>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
export default{
    components:{
        DatePicker: DatePicker
    },
    props:{
        dataItem: Object,
    },
    data: function(){
        return{
            dateValue: this.date()
        }
    },
    beforeCreate(){
    },
    methods:{
        date(){
            let dateValue = '';
            if(this.dataItem.Date == null){
                dateValue = new Date();
                let month = dateValue.getMonth() + 1;
                if(month < 10){
                    month = '0' + month;
                }
                let day = dateValue.getDate();
                if(day < 10){
                    day = '0' + day
                }
                let date = dateValue.getFullYear() + '/' + month + '/' + day;
                localStorage.setItem('dateValue', date);
            }
            else{
                dateValue = new Date(this.dataItem.Date);
            }
            return dateValue;
        },
        change(e){
            localStorage.removeItem('dateValue');
            const d = e.target.value;
            let month = d.getMonth() + 1;
            if(month < 10){
                month = '0' + month;
            }
            let day = d.getDate();
            if(day < 10){
                day = '0' + day
            }
            let date = d.getFullYear() + '/' + month + '/' + day;
            this.dateValue = new Date(date);
            localStorage.setItem('dateValue', date);
        }
    }
}

</script>