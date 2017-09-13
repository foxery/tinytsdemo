import { v, AncView, vlist } from 'tinyts/core/tinyts';

import { ViewV, View } from 'tinyts/core/view';
import { Button } from 'tinyts/control/button';
import { ListView, ListViewV, SubView } from 'tinyts/control/list';
import { Meta } from 'tinyts/core/meta';
import { TsDate } from 'tinyts/utils/date';

class DataModel {

    constructor(public Id: number, public Name: string, public ListData: string[], public Date: string) {

    }
}

class ListData {
    constructor(public Id: number, public Name: string) {

    }
}

class ULLI extends SubView<DataModel> {

    @v(View, ".list-item")
    li: View;

    @v(ListView, ".mSubList")
    mSubList: ListView<ListData>;

    AfterInject() {
        this.li.On("click", () => {
            alert(this.viewData.Id);
        });

        var data = [];
        data.push(new ListData(1, "子列表1"));
        data.push(new ListData(2, "子列表2"));
        this.mSubList.SetData(data);
    }
}

class ListviewvClassModel extends AncView {

    data: DataModel[];

    @vlist(ListViewV, ULLI,".mList")
    mList: ListViewV<DataModel, ULLI>;

    AfterInject() {
        var data = [];
        data.push(new DataModel(1, "a1", ["aa"], "qqq"));
        data.push(new DataModel(2, "a1", ["aa"], "qqq"));
        this.mList.SetData(data);
    }
}

var aa = new ListviewvClassModel();