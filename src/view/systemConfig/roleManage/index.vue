<template>
  <div id="roleManage">
    <!-- 查询条件 -->
    <div class="query_wrap clearfix">
      <Input v-model="query" size="large" placeholder="请输入角色名称" style="width:200px;float:left;"></Input>
      <Button type="success" size="large" style="float:left;margin-left:20px;">查询</Button>
      <Button type="primary" size="large" style="float:left;margin-left:20px;">添加</Button>
    </div>
    <!-- 表格 -->
    <div class="table_wrap">
      <Table border :columns="columns" :data="tableData"></Table>
      <Page :total="2" size="small" show-total></Page>
    </div>

     <!-- 编辑模态框 -->
    <Modal v-model="editModal" title="角色信息修改" :mask-closable='false' class="nofoot" >
        <div class="editForm">
          <Form :model="editForm" :label-width="80">
            <FormItem label="角色名称">
                <Input v-model="editForm.name" placeholder="角色名称"></Input>
            </FormItem>
            <FormItem label="角色描述">
                <Input v-model="editForm.address" placeholder="角色描述"></Input>
            </FormItem>
             <FormItem>
                <Button type="success" size='large'>立即提交</Button>
                <Button style="margin-left: 8px" size='large'>取消</Button>
            </FormItem> 
          </Form>
        </div>
    </Modal>

    <!-- 删除模态框 -->
    <Modal v-model="delModal" title='角色删除' :mask-closable='false'>
      <p style="font-size:16px">确定删除该角色？</p>
    </Modal>

    <!-- 分配菜单模态框 -->
    <Modal v-model="disModal" title='分配菜单' :mask-closable='false' class='nofoot'>
      <Form :model="disForm">
        <FormItem>
            <Button type="success" size='large'>立即提交</Button>
            <Button style="margin-left: 8px" size='large'>取消</Button>
        </FormItem> 
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data(){
    return {
      query:'',
      columns:[
        {
            title: '角色名称',
            key: 'address'
        },
        {
            title: '角色描述',
            key: 'address'
        },
        {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
                return h('div', [
                    h('Button', {
                        props: {
                            type: 'primary',
                            size: 'small'
                        },
                        style: {
                            marginRight: '10px'
                        },
                        on: {
                            click: () => {
                                this.edit(params.index)
                            }
                        }
                    }, '编辑'),
                    h('Button', {
                        props: {
                            type: 'error',
                            size: 'small'
                        },
                        style: {
                            marginRight: '10px'
                        },
                        on: {
                            click: () => {
                                this.del(params.index)
                            }
                        }
                    }, '删除'),
                    h('Button', {
                        props: {
                            type: 'success',
                            size: 'small'
                        },
                        on: {
                            click: () => {
                                this.distribute(params.index)
                            }
                        }
                    }, '分配菜单')
                ]);
            }
        }
      ],
      tableData: [
        {
            name: '管理员',
            address: '管理员'
        },
        {
            name: '管理员',
            address: '管理员'
        },
      ],
      editModal: false,
      editForm: {
        name: '',
        address: ''
      },
      delModal: false,
      disModal: false,
      disForm: ''
    }
  },
  created(){
    document.title = '系统配置-角色管理'
  },
  methods: {
    // 点击编辑
    edit() {
      this.editModal = true;
    },
    // 点击删除
    del() {
      this.delModal = true;
    },
    // 点击分配菜单
    distribute() {
      this.disModal = true;
    }
  }
}
</script>

<style scoped lang='scss' type='text/css'>
  #roleManage {
      border: 1px solid #ccc;
      height:100%;
      
    .query_wrap {
        padding: 15px;
        background:#eee;
      }
    .table_wrap {
        padding: 15px;
      }
    
  }
</style>

