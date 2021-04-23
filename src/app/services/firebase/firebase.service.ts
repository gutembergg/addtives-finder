import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IAdditive } from "src/app/interfaces/IAdditive";
import { AdditivesService } from "../additives.service";

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  _additivesList$ = new BehaviorSubject([]);
  additivesList$: Observable<any> = this._additivesList$.asObservable();

  colections: AngularFirestoreCollection<any>;

  dbListAdditive: any[];

  constructor(
    private _firestore: AngularFirestore,
    private _addService: AdditivesService
  ) {
    this.colections = this._firestore.collection("additives");
    this.colections
      .stateChanges(["added", "modified"])
      .pipe(
        map((response) =>
          response
            .map((res) => {
              const data = res.payload.doc.data();
              const id = res.payload.doc.id;
              return { id, ...data };
            })
            .sort((a, b) => {
              if (a.id < b.id) {
                return -1;
              }
              if (a.id > b.id) {
                return 1;
              }
              return 0;
            })
        )
      )
      .subscribe((newData: any) => {
        const currentState = this._additivesList$.value.filter(
          (product) => !newData.find((newP) => newP.id === product.id)
        );
        const newState = [...currentState, ...newData];

        this._additivesList$.next(newState);
      });
  }

  async addFavorite(id: string) {
    await this._firestore
      .collection("additives")
      .doc(id)
      .update({
        isFavorite: true
      })
      .then((response) => {
        console.log("Success", response);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  /*  getAdditivesListLocal() {
    this._addService.getLocalList().subscribe((response) =>
      response.map((additive: IAdditive) => {
        this.registerAdditive(additive);
      })
    );
  }

  registerAdditive(additive: IAdditive) {
    this._firestore
      .collection("additives")
      .add(additive)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  } */
}
