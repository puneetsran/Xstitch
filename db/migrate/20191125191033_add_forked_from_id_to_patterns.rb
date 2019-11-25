class AddForkedFromIdToPatterns < ActiveRecord::Migration[5.2]
  def change
    add_column :patterns, :forked_from_id, :integer
    add_reference :patterns, forked_from_id, :integer, index: true
  end
end
