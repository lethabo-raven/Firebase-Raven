<template>
  <formElement>
    <fieldset>
  <div style="padding: 5px;">
    <div class="container text-left">
      <div class="row">
        <div class="col">
          <div class="col-4">
          <div>
            <datepicker
              :required="true"
              :defaultValue="defaultValue"
              :label="'Invoice Date'"
              :format="'yyyy-MM-dd'"
            ></datepicker>
            </div>
            <div >
              <KInput 
              :required="true"
              :label="'Client Name'"
              :width="'300px'"
              ></KInput>
            </div>
            </div>
            <div class="w-100"></div>
            <div class="col-4">
              <div >
              Client Address
              <br/>
              <TextArea 
              :required="true"
              :autoSize="true"
              :rows="1"
              :label="'Address'"
              :width="'300px'"
              ></TextArea>
            </div>
            <div >
              <KInput 
              :label="'Client Email Address'"
              :required="true"
              :width="'300px'"
              ></KInput>
            </div>
            </div>
        </div>
        <div class="col">

        </div>
      </div>
    </div>
  </div>
</fieldset>
</formElement>
</template>
<script>
import { TextBox, TextArea } from '@progress/kendo-vue-inputs';
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { Field, FormElement} from "@progress/kendo-vue-form";

export default {
  components: {
    KInput: TextBox,
    datepicker: DatePicker,
    TextArea: TextArea,
    formElement: FormElement,
    Field: Field
    
  },
  data: function(){
    return{
      defaultValue: new Date()
    }
  }
};
</script>