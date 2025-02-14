<template>
    <div>
      <k-dialog
        :width="500"
        :height="700"
        @close="close"
      >
        <div>
            
        </div>
        <dialog-actions-bar>
          <kbutton @click="editInvoice">Edit Invoice</kbutton>
          <kbutton @click="">Download Invoice</kbutton>
          <!-- <kbutton @click="sendEmail">Send Email</kbutton> -->
          <kbutton :theme-color="'primary'" @click="editClose">Cancel</kbutton>
        </dialog-actions-bar>
      </k-dialog>
      <NotificationGroup
      :style="{
        right: 0,
        top: 0,
        alignItems: 'flex-start',
        flexWrap: 'wrap-reverse',
      }"
    >
      <Push :appear="success">
        <Notification
          v-if="success"
          :type="{
            style: 'success',
            icon: true,
          }"
          :closable="true"
          @close="onClose('success')"
        >
          <span>Success Notification</span>
        </Notification>
      </Push>
    </NotificationGroup>
    </div>
  </template>
  <script>
  import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
  import { Button } from '@progress/kendo-vue-buttons';
  import {
  Notification,
  NotificationGroup,
  } from '@progress/kendo-vue-notification';
  import { Push } from '@progress/kendo-vue-animation';
  
  export default {
    components: {
      Notification,
      NotificationGroup,
      Push,
      'k-dialog': Dialog,
      'dialog-actions-bar': DialogActionsBar,
      kbutton: Button,
    },
    methods: {
        editInvoice(){
        this.$emit('editInvoice');
      },
      sendEmail(){
        this.$emit('sendEmail');
      },
      editClose(){
        this.$emit('editClose');
      },
    },
  };
  </script>
  