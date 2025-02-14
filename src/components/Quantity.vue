<template>
    <td v-if="!dataItem.inEdit">{{ dataItem.Quantity }}
    </td>
    <td v-else>
        <NumericTextBox
          :style="{ width: '80px' }"
          :value="quantityValue"
          @change="change"
          :default-value="defaultValue"
        >
        </NumericTextBox>
    </td>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
export default {
  components: {
    NumericTextBox,
  },
  props: {
    dataItem: Object,
  },
  data: function () {
    return {
      quantityValue: this.qValue(),
      defaultValue: 1,
    };
  },
  methods: {
    qValue(){
      let qValue = '';
      if(this.dataItem.Quantity == 1){
        qValue = null;
      }
      else{
        qValue = this.dataItem.Quantity;
      }
      return qValue;
    },
    change(e){
        localStorage.removeItem('quantityValue');
        this.dataItem.Amount = localStorage.getItem('itemPrice') * e.target.value;
        this.quantityValue = e.target.value;
        localStorage.setItem('quantityValue', e.target.value);
    }
  },
};
</script>