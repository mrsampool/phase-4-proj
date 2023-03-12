class CreatePunchcards < ActiveRecord::Migration[6.1]
  def change
    create_table :punchcards do |t|
      t.string :name
      t.string :kind
      t.integer :count
      t.string :reward
      t.integer :user_id

      t.timestamps
    end
  end
end
